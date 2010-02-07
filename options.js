function $(id) {
    return document.getElementById(id);
}

function init() {
    $('bgcolor').value = config.get('bgcolor');
    $('checks').checked = config.get('checks');
}

function save() {
    config.set('bgcolor', $('bgcolor').value);
    config.set('checks', $('checks').checked);
}
