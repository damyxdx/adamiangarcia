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

    // Verificar si el contenedor de lluvia existe
    if (rainContainer) {
        // Función para crear una gota de lluvia
        function createRainDrop() {
            const rainDrop = document.createElement('div');
            rainDrop.classList.add('rain-drop');

            // Posición horizontal aleatoria (0 a 100vw)
            rainDrop.style.left = `${Math.random() * 100}vw`;
            // Duración de la animación aleatoria para que las gotas caigan a diferentes velocidades
            rainDrop.style.animationDuration = `${Math.random() * 1.5 + 0.5}s`;
            // Tamaño aleatorio para cada gota
            rainDrop.style.height = `${Math.random() * 15 + 5}px`;

            // Añadir la gota al contenedor
            rainContainer.appendChild(rainDrop);

            // Elimina la gota una vez termine la animación para evitar sobrecargar la página
            rainDrop.addEventListener('animationend', () => {
                rainDrop.remove();
                // Llama de nuevo a la función para continuar generando gotas
                createRainDrop();
            });
        }

        // Generar gotas de lluvia continuamente
        setInterval(createRainDrop, 100);
    }
});
