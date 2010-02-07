config.defaults({
    bgcolor: '#ffffff',
    checks: false
});

chrome.extension.onRequest.addListener(function(req, src, send) {
    if (req == 'background') {
        send({
            checks: config.get('checks'),
            bgcolor: config.get('bgcolor')
        });
    }
});

