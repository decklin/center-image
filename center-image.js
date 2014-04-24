if (document.body) {
	centerImage();
}
else {
	setTimeout(retry, 0);
}

var retryCount = 0;
function retry () {
	if (document.body) {
		centerImage();
	}
	else if (retryCount === 3) {
		document.addEventListener("DOMContentLoaded", centerImage);
	}
	else {
		setTimeout(retry, 50);
	}
}

function centerImage() {
	var html = document.documentElement;
	var body = document.body;
	
	html.style.display = 'table';
	html.style.width = '100%';
	html.style.height = '100%';
	
	body.style.display = 'table-cell';
	body.style.verticalAlign = 'middle';
	body.style.textAlign = 'center';
	
	chrome.storage.sync.get({
	    bgcolor: '#ffffff',
	    checks: false
	}, function(config) {
	    if (config.checks) {
	        drawChecks();
	    } else if (config.bgcolor) {
	        body.style.backgroundColor = config.bgcolor;
	    }
	});
	
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
}
