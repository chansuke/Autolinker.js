Ext.data.JsonP.UrlMatcher({"tagname":"class","name":"UrlMatcher","autodetected":{},"files":[{"filename":"url-matcher.js","href":"url-matcher.html#UrlMatcher"}],"members":[{"name":"closeParensRe","tagname":"property","owner":"UrlMatcher","id":"property-closeParensRe","meta":{"private":true}},{"name":"matcherRegex","tagname":"property","owner":"UrlMatcher","id":"property-matcherRegex","meta":{"private":true}},{"name":"openParensRe","tagname":"property","owner":"UrlMatcher","id":"property-openParensRe","meta":{"private":true}},{"name":"wordCharRegExp","tagname":"property","owner":"UrlMatcher","id":"property-wordCharRegExp","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"UrlMatcher","id":"method-constructor","meta":{}},{"name":"matchHasInvalidCharAfterTld","tagname":"method","owner":"UrlMatcher","id":"method-matchHasInvalidCharAfterTld","meta":{"private":true}},{"name":"matchHasUnbalancedClosingParen","tagname":"method","owner":"UrlMatcher","id":"method-matchHasUnbalancedClosingParen","meta":{"private":true}},{"name":"parseMatches","tagname":"method","owner":"UrlMatcher","id":"method-parseMatches","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-UrlMatcher","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/url-matcher.html#UrlMatcher' target='_blank'>url-matcher.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-closeParensRe' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UrlMatcher'>UrlMatcher</span><br/><a href='source/url-matcher.html#UrlMatcher-property-closeParensRe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UrlMatcher-property-closeParensRe' class='name expandable'>closeParensRe</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The regular expression to match closing parenthesis in a URL match. ...</div><div class='long'><p>The regular expression to match closing parenthesis in a URL match. See\n<a href=\"#!/api/UrlMatcher-property-openParensRe\" rel=\"UrlMatcher-property-openParensRe\" class=\"docClass\">openParensRe</a> for more information.</p>\n<p>Defaults to: <code>/\\)/g</code></p></div></div></div><div id='property-matcherRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UrlMatcher'>UrlMatcher</span><br/><a href='source/url-matcher.html#UrlMatcher-property-matcherRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UrlMatcher-property-matcherRegex' class='name expandable'>matcherRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The regular expression to match URLs with an optional scheme, port\nnumber, path, query string, and hash anchor. ...</div><div class='long'><p>The regular expression to match URLs with an optional scheme, port\nnumber, path, query string, and hash anchor.</p>\n\n<p>Example matches:</p>\n\n<pre><code>http://google.com\nwww.google.com\ngoogle.com/path/to/file?q1=1&amp;q2=2#myAnchor\n</code></pre>\n\n<p>This regular expression will have the following capturing groups:</p>\n\n<ol>\n<li>Group that matches a scheme-prefixed URL (i.e. 'http://google.com').\nThis is used to match scheme URLs with just a single word, such as\n'http://localhost', where we won't double check that the domain name\nhas at least one dot ('.') in it.</li>\n<li>Group that matches a 'www.' prefixed URL. This is only matched if the\n'www.' text was not prefixed by a scheme (i.e.: not prefixed by\n'http://', 'ftp:', etc.)</li>\n<li>A protocol-relative ('//') match for the case of a 'www.' prefixed\nURL. Will be an empty string if it is not a protocol-relative match.\nWe need to know the character before the '//' in order to determine\nif it is a valid match or the // was in a string we don't want to\nauto-link.</li>\n<li>Group that matches a known TLD (top level domain), when a scheme\nor 'www.'-prefixed domain is not matched.</li>\n<li>A protocol-relative ('//') match for the case of a known TLD prefixed\nURL. Will be an empty string if it is not a protocol-relative match.\nSee #3 for more info.</li>\n</ol>\n\n</div></div></div><div id='property-openParensRe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UrlMatcher'>UrlMatcher</span><br/><a href='source/url-matcher.html#UrlMatcher-property-openParensRe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UrlMatcher-property-openParensRe' class='name expandable'>openParensRe</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The regular expression to match opening parenthesis in a URL match. ...</div><div class='long'><p>The regular expression to match opening parenthesis in a URL match.</p>\n\n<p>This is to determine if we have unbalanced parenthesis in the URL, and to\ndrop the final parenthesis that was matched if so.</p>\n\n<p>Ex: The text \"(check out: wikipedia.com/something<em>(disambiguation))\"\nshould only autolink the inner \"wikipedia.com/something</em>(disambiguation)\"\npart, so if we find that we have unbalanced parenthesis, we will drop the\nlast one for the match.</p>\n<p>Defaults to: <code>/\\(/g</code></p></div></div></div><div id='property-wordCharRegExp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UrlMatcher'>UrlMatcher</span><br/><a href='source/url-matcher.html#UrlMatcher-property-wordCharRegExp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UrlMatcher-property-wordCharRegExp' class='name expandable'>wordCharRegExp</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>A regular expression to use to check the character before a protocol-relative\nURL match. ...</div><div class='long'><p>A regular expression to use to check the character before a protocol-relative\nURL match. We don't want to match a protocol-relative URL if it is part\nof another word.</p>\n\n<p>For example, we want to match something like \"Go to: //google.com\",\nbut we don't want to match something like \"abc//google.com\"</p>\n\n<p>This regular expression is used to test the character before the '//'.</p>\n\n<p>wordCharRegExp</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UrlMatcher'>UrlMatcher</span><br/><a href='source/url-matcher.html#UrlMatcher-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/UrlMatcher-method-constructor' class='name expandable'>UrlMatcher</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/UrlMatcher\" rel=\"UrlMatcher\" class=\"docClass\">UrlMatcher</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object<div class='sub-desc'><p>The configuration properties for the Match instance,\n  specified in an Object (map).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/UrlMatcher\" rel=\"UrlMatcher\" class=\"docClass\">UrlMatcher</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-matchHasInvalidCharAfterTld' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UrlMatcher'>UrlMatcher</span><br/><a href='source/url-matcher.html#UrlMatcher-method-matchHasInvalidCharAfterTld' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UrlMatcher-method-matchHasInvalidCharAfterTld' class='name expandable'>matchHasInvalidCharAfterTld</a>( <span class='pre'>urlMatch, schemeUrlMatch</span> ) : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Determine if there's an invalid character after the TLD in a URL. ...</div><div class='long'><p>Determine if there's an invalid character after the TLD in a URL. Valid\ncharacters after TLD are ':/?#'. Exclude scheme matched URLs from this\ncheck.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>urlMatch</span> : String<div class='sub-desc'><p>The matched URL, if there was one. Will be an\n  empty string if the match is not a URL match.</p>\n</div></li><li><span class='pre'>schemeUrlMatch</span> : String<div class='sub-desc'><p>The match URL string for a scheme\n  match. Ex: 'http://yahoo.com'. This is used to match something like\n  'http://localhost', where we won't double check that the domain name\n  has at least one '.' in it.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>the position where the invalid character was found. If\n  no such character was found, returns -1</p>\n</div></li></ul></div></div></div><div id='method-matchHasUnbalancedClosingParen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UrlMatcher'>UrlMatcher</span><br/><a href='source/url-matcher.html#UrlMatcher-method-matchHasUnbalancedClosingParen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UrlMatcher-method-matchHasUnbalancedClosingParen' class='name expandable'>matchHasUnbalancedClosingParen</a>( <span class='pre'>matchStr</span> ) : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Determines if a match found has an unmatched closing parenthesis. ...</div><div class='long'><p>Determines if a match found has an unmatched closing parenthesis. If so,\nthis parenthesis will be removed from the match itself, and appended\nafter the generated anchor tag.</p>\n\n<p>A match may have an extra closing parenthesis at the end of the match\nbecause the regular expression must include parenthesis for URLs such as\n\"wikipedia.com/something_(disambiguation)\", which should be auto-linked.</p>\n\n<p>However, an extra parenthesis <em>will</em> be included when the URL itself is\nwrapped in parenthesis, such as in the case of \"(wikipedia.com/something_(disambiguation))\".\nIn this case, the last closing parenthesis should <em>not</em> be part of the\nURL itself, and this method will return <code>true</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>matchStr</span> : String<div class='sub-desc'><p>The full match string from the <a href=\"#!/api/UrlMatcher-property-matcherRegex\" rel=\"UrlMatcher-property-matcherRegex\" class=\"docClass\">matcherRegex</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if there is an unbalanced closing parenthesis at\n  the end of the <code>matchStr</code>, <code>false</code> otherwise.</p>\n</div></li></ul></div></div></div><div id='method-parseMatches' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UrlMatcher'>UrlMatcher</span><br/><a href='source/url-matcher.html#UrlMatcher-method-parseMatches' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UrlMatcher-method-parseMatches' class='name expandable'>parseMatches</a>( <span class='pre'>text</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});