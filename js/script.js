// ============================================================
// script.js — JavaScript del sitio del III Congreso
// Funciones: mensaje en consola y redirección de formularios
// ============================================================

// Mensaje de confirmación al cargar cualquier página del sitio
console.log("Página cargada correctamente");

// Esperamos a que el HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

    // --- FORMULARIOS DE REGISTRO ---
    // Buscamos todos los formularios con la clase "formulario"
    var formularios = document.querySelectorAll(".formulario");

    formularios.forEach(function (formulario) {

        // Evento que se ejecuta al presionar "Enviar"
        formulario.addEventListener("submit", function (evento) {

            // Evitamos que el navegador envíe el formulario a un servidor
            evento.preventDefault();

            // checkValidity() revisa las reglas HTML5 (required, email, etc.)
            if (formulario.checkValidity()) {

                // Leemos la página de origen desde el atributo data-origen
                var paginaOrigen = formulario.getAttribute("data-origen");

                // Redirigimos a exito.html con el parámetro origen en la URL
                window.location.href = "exito.html?origen=" + paginaOrigen;

            } else {
                // Si hay errores, el navegador muestra los mensajes nativos
                formulario.reportValidity();
            }
        });
    });

    // --- BOTÓN EN exito.html ---
    // Configura "Realizar nuevo registro" para volver al formulario correcto
    var btnNuevoRegistro = document.getElementById("btn-nuevo-registro");

    if (btnNuevoRegistro) {

        // URLSearchParams lee los parámetros de la URL (?origen=...)
        var parametros = new URLSearchParams(window.location.search);
        var origen = parametros.get("origen");

        if (origen) {
            btnNuevoRegistro.href = origen;
        } else {
            // Si no hay parámetro, regresa al inicio
            btnNuevoRegistro.href = "index.html";
        }
    }

});
