var md = require('markdown-it')();
function markdownToHTML(markdown: string): void {
    var result = md.render(markdown);
    console.log(result);
};

markdownToHTML('# markdown-it rulezz!');