document.addEventListener("DOMContentLoaded", function() {
    // Poner un temporizador en el texto simulado del terminal
    const commands = document.querySelectorAll(".command");
    let delay = 0;

    commands.forEach((command) => {
        delay += 300;
        setTimeout(() => {
            command.style.opacity = 1;
        }, delay);
    });

    // Abrir enlaces externos en nueva pestaña
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            window.open(link.href, '_blank');
        });
    });
    // Selecciona el contenedor de lluvia
const rainContainer = document.querySelector('.rain-container');

// Función para crear una gota de lluvia
function createRainDrop() {
    const rainDrop = document.createElement('div');
    rainDrop.classList.add('rain-drop');

    // Posición horizontal aleatoria
    rainDrop.style.left = `${Math.random() * 1000}vw`;
    // Duración de la animación aleatoria para que las gotas caigan a diferentes velocidades
    rainDrop.style.animationDuration = `${Math.random() * 20 + 10}s`;
    // Tamaño aleatorio para cada gota
    rainDrop.style.height = `${Math.random() * 150 + 50}px`;

    // Añadir la gota al contenedor
    rainContainer.appendChild(rainDrop);

    // Elimina la gota una vez termine la animación
    rainDrop.addEventListener('animationend', () => {
        rainDrop.remove();
    });
}

// Generar gotas de lluvia cada 100 ms
setInterval(createRainDrop, 100);

});
