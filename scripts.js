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

    // Función para crear gotas de lluvia con colores RGB aleatorios
    function createRainDrop() {
        const rainDrop = document.createElement('div');
        rainDrop.classList.add('rain-drop');

        // Posición horizontal aleatoria
        rainDrop.style.left = `${Math.random() * 100}vw`;
        // Duración de la animación aleatoria
        rainDrop.style.animationDuration = `${Math.random() * 1.5 + 0.5}s`;
        // Tamaño aleatorio
        rainDrop.style.height = `${Math.random() * 15 + 5}px`;

        // Color RGB aleatorio
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        rainDrop.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.8)`;

        // Añadir la gota al contenedor
        rainContainer.appendChild(rainDrop);

        // Elimina la gota una vez termine la animación
        rainDrop.addEventListener('animationend', () => {
            rainDrop.remove();
        });
    }

    // Generar gotas de lluvia continuamente
    setInterval(createRainDrop, 100);
});
