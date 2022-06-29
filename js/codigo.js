const mostrarVentanaModal = () => {
    document.querySelector("#backModal").style.display = "flex";
}

document.querySelector(".callToActionContactos").addEventListener('click', mostrarVentanaModal)
document.querySelector("#callToAction2").addEventListener('click', mostrarVentanaModal)

const cerrarVentanaModal = () => {
    document.querySelector("#backModal").style.display = "none";
    document.querySelector("#modalContacto2").style.display = "none";
    document.querySelector("#volveraInicio").style.display = "none";
    document.querySelector("#modalContacto1").style.display = "block";
    
}
document.querySelector("#cerrarModal").addEventListener('click', cerrarVentanaModal)

const cerrarVentanaModal2 = () => {
    document.querySelector("#backModal").style.display = "none";
    document.querySelector("#modalContacto2").style.display = "none";
    document.querySelector("#volveraInicio").style.display = "none";
    document.querySelector("#modalContacto1").style.display = "block";
    
}
document.querySelector("#cerrarModal2").addEventListener('click', cerrarVentanaModal2)

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

document.querySelector("#modalContacto")

 const abrirServicios = () => {
    document.querySelector("#contenidoDeSeccionServicios").style.display = "block";
    document.querySelector("#boton1").style.display = "none";
    document.querySelector("#boton1Cerrar").style.display = "block";
}

document.querySelector("#boton1").addEventListener('click', abrirServicios); 

const cerrarServicios = () => {
    document.querySelector("#contenidoDeSeccionServicios").style.display = "none";
    document.querySelector("#boton1").style.display = "block";
    document.querySelector("#boton1Cerrar").style.display = "none";
}

document.querySelector("#boton1Cerrar").addEventListener('click', cerrarServicios); 

const abrirMetodos = () => {
    document.querySelector("#contenidoDeSeccionMetodosDePago").style.display = "block";
    document.querySelector("#boton2").style.display = "none";
    document.querySelector("#boton2Cerrar").style.display = "block";
}

document.querySelector("#boton2").addEventListener('click', abrirMetodos);

const cerrarMetodos = () => {
    document.querySelector("#contenidoDeSeccionMetodosDePago").style.display = "none";
    document.querySelector("#boton2").style.display = "block";
    document.querySelector("#boton2Cerrar").style.display = "none";
}

document.querySelector("#boton2Cerrar").addEventListener('click', cerrarMetodos);

const abrirHorarios = () => {
    document.querySelector("#contenidoDeSeccionHorarios").style.display = "block";
    document.querySelector("#boton3").style.display = "none";
    document.querySelector("#boton3Cerrar").style.display = "block";
    document.querySelector("")
}

document.querySelector("#boton3").addEventListener('click', abrirHorarios)

const cerrarHorarios = () => {
    document.querySelector("#contenidoDeSeccionHorarios").style.display = "none";
    document.querySelector("#boton3").style.display = "block";
    document.querySelector("#boton3Cerrar").style.display = "none";
}

document.querySelector("#boton3Cerrar").addEventListener('click', cerrarHorarios)


