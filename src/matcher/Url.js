/*global Autolinker */
/**
 * @class Autolinker.matcher.Url
 * @extends Autolinker.matcher.Matcher
 *
 * Matcher to find URL matches in an input string.
 *
 * See this class's superclass ({@link Autolinker.matcher.Matcher}) for more details.
 */
Autolinker.matcher.Url = Autolinker.Util.extend( Autolinker.matcher.Matcher, {

	/**
	 * @cfg {Boolean} stripPrefix (required)
	 * @inheritdoc Autolinker#stripPrefix
	 */


	/**
	 * @private
	 * @property {RegExp} matcherRegex
	 *
	 * The regular expression to match URLs with an optional protocol, port number, path,
	 * query string, and hash anchor.
	 * Example matches:
	 *
	 *     http://google.com
	 *     www.google.com
	 *     google.com/path/to/file?q1=1&q2=2#myAnchor
	 *
	 *
	 * This regular expression will have the following capturing groups:
	 *
	 * 1.  Group that matches a protocol URL (i.e. 'http://google.com'). This is
	 *     used to match protocol URLs with just a single word, like 'http://localhost',
	 *     where we won't double check that the domain name has at least one '.'
	 *     in it.
	 * 2.  A protocol-relative ('//') match for the case of a 'www.' prefixed
	 *     URL. Will be an empty string if it is not a protocol-relative match.
	 *     We need to know the character before the '//' in order to determine
	 *     if it is a valid match or the // was in a string we don't want to
	 *     auto-link.
	 * 3.  A protocol-relative ('//') match for the case of a known TLD prefixed
	 *     URL. Will be an empty string if it is not a protocol-relative match.
	 *     See #2 for more info.
	 */
	matcherRegex : (function() {
		var protocolRegex = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,  // match protocol, allow in format "http://" or "mailto:". However, do not match the first part of something like 'link:http://www.google.com' (i.e. don't match "link:"). Also, make sure we don't interpret 'google.com:8000' as if 'google.com' was a protocol here (i.e. ignore a trailing port number in this regex)
		    wwwRegex = /(?:www\.)/,                  // starting with 'www.'
		    domainNameRegex = Autolinker.matcher.domainNameRegex,
		    tldRegex = Autolinker.matcher.tldRegex,  // match our known top level domains (TLDs)

		    // Allow optional path, query string, and hash anchor, not ending in the following characters: "?!:,.;"
		    // http://blog.codinghorror.com/the-problem-with-urls/
		    urlSuffixRegex = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;

		return new RegExp( [
			'(?:', // parens to cover match for protocol (optional), and domain
				'(',  // *** Capturing group $1, for a protocol-prefixed url (ex: http://google.com)
					protocolRegex.source,
					domainNameRegex.source,
				')',

				'|',

				'(?:',  // non-capturing paren for a 'www.' prefixed url (ex: www.google.com)
					'(//)?',  // *** Capturing group $2 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
					wwwRegex.source,
					domainNameRegex.source,
				')',

				'|',

				'(?:',  // non-capturing paren for known a TLD url (ex: google.com)
					'(//)?',  // *** Capturing group $3 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
					domainNameRegex.source + '\\.',
					tldRegex.source,
				')',
			')',

			'(?:' + urlSuffixRegex.source + ')?'  // match for path, query string, and/or hash anchor - optional
		].join( "" ), 'gi' );
	} )(),


	/**
	 * A regular expression to use to check the character before a protocol-relative URL
	 * match. We don't want to match a protocol-relative URL if it is part of another
	 * word.
	 *
	 * For example, we want to match something like "Go to: //google.com",
	 * but we don't want to match something like "abc//google.com"
	 *
	 * This regular expression is used to test the character before the '//'.
	 *
	 * @private
	 * @type {RegExp} wordCharRegExp
	 */
	wordCharRegExp : /\w/,


	/**
	 * The regular expression to match opening parenthesis in a URL match.
	 *
	 * This is to determine if we have unbalanced parenthesis in the URL, and to
	 * drop the final parenthesis that was matched if so.
	 *
	 * Ex: The text "(check out: wikipedia.com/something_(disambiguation))"
	 * should only autolink the inner "wikipedia.com/something_(disambiguation)"
	 * part, so if we find that we have unbalanced parenthesis, we will drop the
	 * last one for the match.
	 *
	 * @private
	 * @property {RegExp}
	 */
	openParensRe : /\(/g,

	/**
	 * The regular expression to match closing parenthesis in a URL match. See
	 * {@link #openParensRe} for more information.
	 *
	 * @private
	 * @property {RegExp}
	 */
	closeParensRe : /\)/g,


	// @if DEBUG
	/**
	 * @constructor
	 * @param {Object} cfg The configuration properties for the Match instance,
	 *   specified in an Object (map).
	 */
	constructor : function() {
		Autolinker.matcher.Matcher.prototype.constructor.apply( this, arguments );

		if( this.stripPrefix == null ) throw new Error( '`stripPrefix` cfg required' );
	},
	// @endif


	/**
	 * @inheritdoc
	 */
	parseMatches : function( text ) {
		var matcherRegex = this.matcherRegex,
		    matches = [],
		    match;

		while( ( match = matcherRegex.exec( text ) ) !== null ) {
			var matchStr = match[ 0 ],
			    protocolUrlMatch = match[ 1 ],
			    wwwProtocolRelativeMatch = match[ 2 ],
			    tldProtocolRelativeMatch = match[ 3 ],
			    offset = match.index,
			    protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch,
				prevChar = text.charAt( offset - 1 );

			if( !Autolinker.matcher.UrlMatchValidator.isValid( matchStr, protocolUrlMatch ) ) {
				continue;
			}

			// If the match is preceded by an '@' character, then it is either
			// an email address or a username. Skip these types of matches.
			if( offset > 0 && prevChar === '@' ) {
				continue;
			}

			// If it's a protocol-relative '//' match, but the character before the '//'
			// was a word character (i.e. a letter/number), then we found the '//' in the
			// middle of another word (such as "asdf//asdf.com"). In this case, skip the
			// match.
			if( offset > 0 && protocolRelativeMatch && this.wordCharRegExp.test( prevChar ) ) {
				continue;
			}

			if( this.matchHasUnbalancedClosingParen( matchStr ) ) {
				matchStr = matchStr.substr( 0, matchStr.length - 1 );  // remove the trailing ")"
			}

			matches.push( new Autolinker.match.Url( {
				matchedText : matchStr,
				offset      : offset,
				url         : matchStr,
				protocolUrlMatch      : !!protocolUrlMatch,
				protocolRelativeMatch : !!protocolRelativeMatch,
				stripPrefix : this.stripPrefix
			} ) );
		}

		return matches;
	},


	/**
	 * Determines if a match found has an unmatched closing parenthesis. If so,
	 * this parenthesis will be removed from the match itself, and appended
	 * after the generated anchor tag in {@link #processCandidateMatch}.
	 *
	 * A match may have an extra closing parenthesis at the end of the match
	 * because the regular expression must include parenthesis for URLs such as
	 * "wikipedia.com/something_(disambiguation)", which should be auto-linked.
	 *
	 * However, an extra parenthesis *will* be included when the URL itself is
	 * wrapped in parenthesis, such as in the case of "(wikipedia.com/something_(disambiguation))".
	 * In this case, the last closing parenthesis should *not* be part of the
	 * URL itself, and this method will return `true`.
	 *
	 * @private
	 * @param {String} matchStr The full match string from the {@link #matcherRegex}.
	 * @return {Boolean} `true` if there is an unbalanced closing parenthesis at
	 *   the end of the `matchStr`, `false` otherwise.
	 */
	matchHasUnbalancedClosingParen : function( matchStr ) {
		var lastChar = matchStr.charAt( matchStr.length - 1 );

		if( lastChar === ')' ) {
			var openParensMatch = matchStr.match( this.openParensRe ),
			    closeParensMatch = matchStr.match( this.closeParensRe ),
			    numOpenParens = ( openParensMatch && openParensMatch.length ) || 0,
			    numCloseParens = ( closeParensMatch && closeParensMatch.length ) || 0;

			if( numOpenParens < numCloseParens ) {
				return true;
			}
		}

		return false;
	}

} );