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

  document.addEventListener("DOMContentLoaded", function() {
    const commands = document.querySelectorAll(".command");
    let delay = 0;

    commands.forEach((command) => {
        delay += 300;
        setTimeout(() => {
            command.style.opacity = 1;
        }, delay);
    });

    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            window.open(link.href, '_blank');
        });
    });

    const rainContainer = document.querySelector('.rain-container');

    // Generar gotas de lluvia de manera uniforme al inicio
    const initialRainDrops = 50;
    for (let i = 0; i < initialRainDrops; i++) {
        createRainDrop();
    }

    function createRainDrop() {
        const rainDrop = document.createElement('div');
        rainDrop.classList.add('rain-drop');
        rainDrop.style.left = `${Math.random() * 100}vw`;
        rainDrop.style.animationDuration = `1.5s`;
        rainDrop.style.height = `10px`;
        rainDrop.style.backgroundColor = `rgba(255, 255, 255, 0.5)`;
        rainContainer.appendChild(rainDrop);

        rainDrop.addEventListener('animationend', () => {
            rainDrop.remove();
            createRainDrop(); // Crear una nueva gota una vez termine la animación
        });
    }
});
