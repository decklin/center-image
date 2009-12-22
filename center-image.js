var html = document.documentElement;
var body = document.body;
var imgs = document.getElementsByTagName('img');

// This is a rather hacky heuristic for determining if we are in fact on a
// generated image "page". It might break at any time.

if (html.childNodes.length == 1 && html.firstChild == body &&
    body.childNodes.length == 1 && body.firstChild == imgs[0])
{
    html.style.display = 'table';
    html.style.width = '100%';
    html.style.height = '100%';

    body.style.display = 'table-cell';
    body.style.verticalAlign = 'middle';
    body.style.textAlign = 'center';

    chrome.extension.sendRequest('bgcolor', function(response) {
        body.style.backgroundColor = response;
    });
}
