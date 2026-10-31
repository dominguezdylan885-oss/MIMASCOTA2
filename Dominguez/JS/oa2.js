document.addEventListener("DOMContentLoaded", () => {
    

    const servicios = document.querySelectorAll(".col-sm-4");

    servicios.forEach(tarjeta => {
        tarjeta.style.cursor = "pointer";

        tarjeta.addEventListener("click", () => {
            const nombreServicio = tarjeta.querySelector("h3").innerText;

            alert(`¡Hola! Estás interesado en nuestro servicio de: ${nombreServicio}.\n\nPara agendar una cita, comunícate con nosotros al 936 541 886.`);
        });
    });

    console.log("¡El script de MiMascota ha sido cargado correctamente! 🐾");
});
