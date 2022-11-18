// Inicio de function//
$(function(){ 
    // tooltip "enviar" boton de cabecera //
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    // Evento-click-alert enviar correo //
    $("#enviar").click(function(){
    alert("¡Gracias por contactarnos!");
    });
    }); // cierre de function //