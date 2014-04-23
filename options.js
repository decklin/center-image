function $(id) {
    return document.getElementById(id);
}

function load() {
    chrome.storage.sync.get({
        bgcolor: 'white',
        checks: false
    }, function(config) {
        $('bgcolor').value = config.bgcolor;
        $('checks').checked = config.checks;
    });
}

function save() {
    chrome.storage.sync.set({
        bgcolor: $('bgcolor').value,
        checks: $('checks').checked
    }, function() {
        // Update status to let user know options were saved.
        var status = $('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 1250);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    load();
    $('options').addEventListener('submit', function (event) {
        save();
        event.preventDefault();
    });
});
