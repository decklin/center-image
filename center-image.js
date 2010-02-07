// This is a rather hacky heuristic for determining if we are in fact on a
// generated image "page". It might break at any time.

if (document.images && document.images[0].src == location.href) {
    document.documentElement.style.display = 'table';
    document.documentElement.style.width = '100%';
    document.documentElement.style.height = '100%';

    document.body.style.display = 'table-cell';
    document.body.style.verticalAlign = 'middle';
    document.body.style.textAlign = 'center';

    chrome.extension.sendRequest('background', function(response) {
        if (response.checks) {
            drawChecks();
        } else if (response.bgcolor) {
            document.body.style.backgroundColor = response.bgcolor;
        }
    });
}

function drawChecks() {
    var gridSize = 16;
    var canvas = document.createElement('canvas');
    canvas.width = window.screen.width;
    canvas.height = window.screen.height;

    document.documentElement.style.backgroundColor = '#666';

    ctx = canvas.getContext('2d');
    ctx.fillStyle = '#999';

    for (var x = 0; x < Math.ceil(canvas.width/gridSize); x++){
        for (var y = 0; y < Math.ceil(canvas.height/gridSize); y++){
            if ((x + y) % 2 === 0)
                ctx.fillRect(x*gridSize, y*gridSize, gridSize, gridSize);
        }
    }

    canvas.style.zIndex ='-1';
    canvas.style.position ='fixed';
    canvas.style.left ='0';
    canvas.style.top ='0';

    document.body.appendChild(canvas);
}
