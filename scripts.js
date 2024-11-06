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
});
