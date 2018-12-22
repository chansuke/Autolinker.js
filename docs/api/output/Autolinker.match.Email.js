Ext.data.JsonP.Autolinker_match_Email({"tagname":"class","name":"Autolinker.match.Email","autodetected":{},"files":[{"filename":"email-match.js","href":"email-match.html#Autolinker-match-Email"}],"extends":"Autolinker.match.Match","members":[{"name":"constructor","tagname":"method","owner":"Autolinker.match.Match","id":"method-constructor","meta":{}},{"name":"buildTag","tagname":"method","owner":"Autolinker.match.Match","id":"method-buildTag","meta":{}},{"name":"getCssClassSuffixes","tagname":"method","owner":"Autolinker.match.Match","id":"method-getCssClassSuffixes","meta":{}},{"name":"getMatchedText","tagname":"method","owner":"Autolinker.match.Match","id":"method-getMatchedText","meta":{}},{"name":"getOffset","tagname":"method","owner":"Autolinker.match.Match","id":"method-getOffset","meta":{}},{"name":"setOffset","tagname":"method","owner":"Autolinker.match.Match","id":"method-setOffset","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.match.Email","short_doc":"Represents a Email match found in an input string which should be Autolinked. ...","component":false,"superclasses":["Autolinker.match.Match"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='docClass'>Autolinker.match.Match</a><div class='subclass '><strong>Autolinker.match.Email</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/email-match.html#Autolinker-match-Email' target='_blank'>email-match.js</a></div></pre><div class='doc-contents'><p>Represents a Email match found in an input string which should be Autolinked.</p>\n\n<p>See this class's superclass (<a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a>) for more details.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/match.html#Autolinker-match-Match-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Autolinker.match.Match-method-constructor' class='name expandable'>Autolinker.match.Email</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object<div class='sub-desc'><p>The configuration properties for the Match\n  instance, specified in an Object (map).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-buildTag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/match.html#Autolinker-match-Match-method-buildTag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-buildTag' class='name expandable'>buildTag</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds and returns an Autolinker.HtmlTag instance based on the\nMatch. ...</div><div class='long'><p>Builds and returns an <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a> instance based on the\nMatch.</p>\n\n<p>This can be used to easily generate anchor tags from matches, and either\nreturn their HTML string, or modify them before doing so.</p>\n\n<p>Example Usage:</p>\n\n<pre><code>var tag = match.buildTag();\ntag.addClass( 'cordova-link' );\ntag.setAttr( 'target', '_system' );\n\ntag.toAnchorString();  // &lt;a href=\"http://google.com\" class=\"cordova-link\" target=\"_system\"&gt;Google&lt;/a&gt;\n</code></pre>\n</div></div></div><div id='method-getCssClassSuffixes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/match.html#Autolinker-match-Match-method-getCssClassSuffixes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getCssClassSuffixes' class='name expandable'>getCssClassSuffixes</a>( <span class='pre'></span> ) : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the CSS class suffix(es) for this match. ...</div><div class='long'><p>Returns the CSS class suffix(es) for this match.</p>\n\n<p>A CSS class suffix is appended to the Autolinker.className in\nthe <a href=\"#!/api/Autolinker.AnchorTagBuilder\" rel=\"Autolinker.AnchorTagBuilder\" class=\"docClass\">Autolinker.AnchorTagBuilder</a> when a match is translated into\nan anchor tag.</p>\n\n<p>For example, if Autolinker.className was configured as 'myLink',\nand this method returns <code>[ 'url' ]</code>, the final class name of the element\nwill become: 'myLink myLink-url'.</p>\n\n<p>The match may provide multiple CSS class suffixes to be appended to the\nAutolinker.className in order to facilitate better styling\noptions for different match criteria. See <a href=\"#!/api/Autolinker.match.Mention\" rel=\"Autolinker.match.Mention\" class=\"docClass\">Autolinker.match.Mention</a>\nfor an example.</p>\n\n<p>By default, this method returns a single array with the match's\ntype name, but may be overridden by subclasses.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMatchedText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/match.html#Autolinker-match-Match-method-getMatchedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getMatchedText' class='name expandable'>getMatchedText</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the original text that was matched. ...</div><div class='long'><p>Returns the original text that was matched.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOffset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/match.html#Autolinker-match-Match-method-getOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getOffset' class='name expandable'>getOffset</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the offset of where the match was made in the input string. ...</div><div class='long'><p>Returns the offset of where the match was made in the input string. This\nis the 0-based index of the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setOffset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/match.html#Autolinker-match-Match-method-setOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-setOffset' class='name expandable'>setOffset</a>( <span class='pre'>offset</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the offset of where the match was made in the input string. ...</div><div class='long'><p>Sets the offset of where the match was made in the input string.</p>\n\n<p>A <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a> will be fed only HTML text nodes,\nand will therefore set an original offset that is relative to the HTML\ntext node itself. However, we want this offset to be relative to the full\nHTML input string, and thus if using <a href=\"#!/api/Autolinker-method-parse\" rel=\"Autolinker-method-parse\" class=\"docClass\">Autolinker.parse</a> (rather\nthan calling a <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a> directly), then this\noffset is corrected after the Matcher itself has done its job.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>offset</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});