document.addEventListener('DOMContentLoaded', function() {
    var switchBebidas = document.getElementById('switchBebidas');

    switchBebidas.addEventListener('change', function() {
        if (!this.checked) {
            window.location.href = 'menu.html';
        }
    });
});