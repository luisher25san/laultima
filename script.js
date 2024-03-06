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

document.addEventListener('DOMContentLoaded', function() {
    var switchMenu = document.getElementById('switchMenu');

    switchMenu.addEventListener('change', function() {
        if (!this.checked) {
            window.location.href = 'bebidas.html';
        }else{
            window.location.href = 'menu.html';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var switchBebidas = document.getElementById('switchBebidas');
    switchBebidas.checked = true;

    switchBebidas.addEventListener('change', function() {
        if (this.checked) {
            window.location.href = 'menu.html';
        }else{
            windows.location.href = 'bebidas.html';
        }
    });
});

$(document).ready(function() {
    $(".contact-info a").each(function() {
        var text = $(this).text();
        var words = text.split(" ");
        var firstWord = words.shift();
        var lastWord = words.pop();
        var newText = "<span class='first-word'>" + firstWord + "</span> " + words.join(" ") + " <span class='last-word'>" + lastWord + "</span>";
        $(this).html(newText);
    });
});
