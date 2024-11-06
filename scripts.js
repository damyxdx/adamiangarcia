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

    // Función para crear gotas de lluvia
    function createRainDrop() {
        const rainDrop = document.createElement('div');
        rainDrop.classList.add('rain-drop');

        // Posición horizontal aleatoria (para dispersarlas por toda la pantalla)
        rainDrop.style.left = `${Math.random() * 100}vw`;
        // La animación será constante, duración fija para todas las gotas
        rainDrop.style.animationDuration = `1.5s`; 
        // Tamaño fijo para las gotas
        rainDrop.style.height = `10px`;

        // Color fijo para las gotas (en un tono blanco suave)
        rainDrop.style.backgroundColor = `rgba(255, 255, 255, 0.5)`; 

        // Añadir la gota al contenedor
        rainContainer.appendChild(rainDrop);

        // Elimina la gota una vez termine la animación
        rainDrop.addEventListener('animationend', () => {
            rainDrop.remove();
        });
    }

    // Generar gotas de lluvia continuamente con un intervalo constante
    setInterval(createRainDrop, 100);  // Genera gotas cada 100ms
});
