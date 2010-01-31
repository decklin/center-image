function init() {
    document.getElementById('bgcolor').value = config.get('bgcolor');
}

function save() {
    config.set('bgcolor', document.getElementById('bgcolor').value);
}
