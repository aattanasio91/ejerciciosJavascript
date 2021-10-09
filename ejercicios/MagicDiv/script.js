var imagen = document.querySelector("img");

var divSecreto = document.getElementById("magic");

divSecreto.addEventListener("mouseover", function() {
    imagen.classList.toggle("ocultar");
})