document.addEventListener("DOMContentLoaded", function() {
    function toggleAside() {
        var aside = document.getElementById("menuAside");
        if (aside.style.display === "none" || aside.style.display === "") {
            aside.style.display = "block";
        } else {
            aside.style.display = "none";
        }
    }

    document.getElementById('dropdown-button').addEventListener('click', function() {
        alert('Botón de Despliegue clicado!');
    });

    var menuButton = document.querySelector('.menu-icon');
    if (menuButton) {
        menuButton.addEventListener('click', toggleAside);
    }
});

