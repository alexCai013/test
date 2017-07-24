// npm install -g fis-parser-less-2.x
fis.match('*.less', {
    rExt: 'css/less.css', // from .less to .css
    parser: fis.plugin('less-2.x', {
        // fis-parser-less-2.x option
    })
});