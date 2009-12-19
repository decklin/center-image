var html = document.documentElement;
var body = document.body;
var imgs = document.getElementsByTagName('img');

if (html.childNodes.length == 1 && html.firstChild == body &&
        body.childNodes.length == 1 && body.firstChild == imgs[0]) {
    with (imgs[0].style) {
        position = 'absolute';
        top = '0';
        left = '0';
        bottom = '0';
        right = '0';
        margin = 'auto';
    }
}
