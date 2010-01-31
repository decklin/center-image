config.defaults({
    bgcolor: '#ffffff'
});

chrome.extension.onRequest.addListener(function(req, src, send) {
    send(config.get(req));
});
