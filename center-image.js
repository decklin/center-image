var html = document.documentElement;
var body = document.body;
var images = document.images;

// This is a rather hacky heuristic for determining if we are in fact on a
// generated image "page". It might break at any time.

if (images && images.length === 1 && images[0].src === location.href) {
    html.style.display = 'table';
    html.style.width = '100%';
    html.style.height = '100%';

    body.style.display = 'table-cell';
    body.style.verticalAlign = 'middle';
    body.style.textAlign = 'center';

    chrome.storage.sync.get({
        bgcolor: 'white',
        checks: false
    }, function(config) {
        if (config.checks) {
            drawChecks();
        } else if (config.bgcolor) {
            body.style.backgroundColor = config.bgcolor;
        }
    });
}

function drawChecks() {
    var gridSize = 16;
    var canvas = document.createElement('canvas');
    canvas.width = gridSize*2;
    canvas.height = gridSize*2;

    ctx = canvas.getContext('2d');
    ctx.fillStyle = '#999';
    ctx.fillRect(0, 0, gridSize, gridSize);
    ctx.fillRect(gridSize, gridSize, gridSize, gridSize);

    body.style.backgroundColor = '#666';
    body.style.backgroundRepeat = 'repeat';
    body.style.backgroundImage = 'url('+canvas.toDataURL("image/png")+')';
}
