chrome.webRequest.onResponseStarted.addListener(function(details) {
	if (details.tabId < 0) return;

	var headers = details.responseHeaders;
	var contentType;
	for (var i = 0; i < headers.length; ++ i) {
		var header = headers[i];
		if (header.name.toLowerCase() === "content-type") {
			contentType = header.value;
		}
	}

	if (contentType ? /^image\//.test(contentType) : /^(data:image\/|file:\/\/.*\.(jpe?g|png|gif|svg|webp|bmp|xbm)$)/i.test(details.url)) {
		chrome.tabs.executeScript(details.tabId, {
			file: "center-image.js",
			runAt: "document_start"
		});
	}
}, {
	urls: ["<all_urls>"],
	types: ["main_frame"]
}, ['responseHeaders']);
