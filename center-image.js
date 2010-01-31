// This is a rather hacky heuristic for determining if we are in fact on a
// generated image "page". It might break at any time.

if (document.images && document.images[0].src == location.href) {
    document.documentElement.style.display = 'table';
    document.documentElement.style.width = '100%';
    document.documentElement.style.height = '100%';

    document.body.style.display = 'table-cell';
    document.body.style.verticalAlign = 'middle';
    document.body.style.textAlign = 'center';

    chrome.extension.sendRequest('bgcolor', function(response) {
        document.body.style.backgroundColor = response;
    });
}
