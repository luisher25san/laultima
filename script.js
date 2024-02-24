window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    if (window.scrollY < 0) {
        header.style.backgroundColor = 'rgba(0, 0, 0)'; // Cambiar el color de fondo del encabezado al hacer scroll hacia abajo
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Restaurar el color de fondo original del encabezado cuando se desplaza hacia arriba
    }
});

window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var windowHeight = window.innerHeight; // Altura de la ventana del navegador
    var documentHeight = document.body.scrollHeight; // Altura total del documento
    var scrollPosition = window.scrollY; // Posición actual de desplazamiento vertical

    // Si el usuario ha llegado al final de la página, muestra el footer
    if (scrollPosition + windowHeight >= documentHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}