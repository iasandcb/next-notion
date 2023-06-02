function getElementByName(name) {
    return document.getElementsByName(name)[0];
}

function getElementById(id) {
    return document.getElementById(id);
}

window.dispatchEvent(new Event('begin'));