"use strict";
var md = require('markdown-it')();
function markdownToHTML(markdown) {
    var result = md.render(markdown);
    console.log(result);
}
;
markdownToHTML('# markdown-it rulezz!');
