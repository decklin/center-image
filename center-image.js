var html = document.documentElement;
var body = document.body;
var imgs = document.getElementsByTagName('img');

// This is a rather hacky heuristic for determining if we are in fact on a
// generated image "page". It might break at any time.

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
    chrome.extension.sendRequest('bgcolor', function(response) {
        body.style.backgroundColor = response;
    });
}
