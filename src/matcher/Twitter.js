/*global Autolinker */
/**
 * @class Autolinker.matcher.Twitter
 * @extends Autolinker.matcher.Matcher
 *
 * Matcher to find/replace username matches in an input string.
 */
Autolinker.matcher.Twitter = Autolinker.Util.extend( Autolinker.matcher.Matcher, {

	/**
	 * The regular expression to match username handles. Example match:
	 *
	 *     @asdf
	 *
	 * @private
	 * @property {RegExp} matcherRegex
	 */
	matcherRegex : /@(\w{1,15})/g,

	/**
	 * The regular expression to use to check the character before a username match to
	 * make sure we didn't accidentally match an email address.
	 *
	 * For example, the string "asdf@asdf.com" should not match "@asdf" as a username.
	 *
	 * @private
	 * @property {RegExp} whitespaceRegex
	 */
	nonWordCharRegex : /[^\w]/,


	/**
	 * @inheritdoc
	 */
	parseMatches : function( text ) {
		var matcherRegex = this.matcherRegex,
		    nonWordCharRegex = this.nonWordCharRegex,
		    matches = [],
		    match;

		while( ( match = matcherRegex.exec( text ) ) !== null ) {
			var offset = match.index,
			    prevChar = text.charAt( offset - 1 );

			// If we found the match at the beginning of the string, or we found the match
			// and there is a whitespace char in front of it (meaning it is not an email
			// address), then it is a username match.
			if( offset === 0 || nonWordCharRegex.test( prevChar ) ) {
				matches.push( new Autolinker.match.Twitter( {
					matchedText   : match[ 0 ],
					offset        : offset,
					twitterHandle : match[ 0 ].slice( 1 )  // strip off the '@' character at the beginning
				} ) );
			}
		}

		return matches;
	}

} );