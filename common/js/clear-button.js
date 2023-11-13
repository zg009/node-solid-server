
(() => {
    function clear() {
        localStorage.clear();
        console.log('cookies cleared!');
        window.location.href = window.location.href + '/clear-success'
    }
    
    window.onload = () => {
        console.log('loadead!')
        const clearButton = document.getElementById('cookie-clear')
        clearButton.addEventListener('click', clear)
    }
})()