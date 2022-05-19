const mostrarVentanaModal = () => {
    document.querySelector("#backModal").style.display = "block";
}

document.querySelector(".callToActionContactos").addEventListener('click', mostrarVentanaModal)

const cerrarVentanaModal = () => {
    document.querySelector("#backModal").style.display = "none";
    document.querySelector("#modalContacto2").style.display = "none";
    document.querySelector("#volveraInicio").style.display = "none";
    document.querySelector("#modalContacto1").style.display = "block";
    
}
document.querySelector("#cerrarModal").addEventListener('click', cerrarVentanaModal)

const accesoMail = () => {
    document.querySelector("#modalContacto2").style.display = "block";
    document.querySelector("#volveraInicio").style.display = "block";
    document.querySelector("#modalContacto1").style.display = "none";
}
document.querySelector("#accesoMail").addEventListener('click', accesoMail)

const volveraInicio = () => {
    document.querySelector("#modalContacto2").style.display = "none";
    document.querySelector("#volveraInicio").style.display = "none";    
    document.querySelector("#modalContacto1").style.display = "block";
}
document.querySelector("#volveraInicio").addEventListener('click', volveraInicio)

