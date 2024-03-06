document.addEventListener('DOMContentLoaded', function() {
    var switchMenu = document.getElementById('switchMenu');

    switchMenu.addEventListener('change', function() {
        if (this.checked) {
            window.location.href = 'bebidas.html';
        }
    });
});