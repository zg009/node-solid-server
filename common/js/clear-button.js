
function clear() {
    localStorage.clear();
    console.log('cookies cleared!');
    window.location.href = window.location.href + '/clear-success'
}

window.onload(() => {
    document.querySelector('#cookie-clear').onclick = clear;
})