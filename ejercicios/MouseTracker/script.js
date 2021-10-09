var imagen = document.getElementById("imagen");

function cambiarTop(imagen, nuevoTop) {
  imagen.style.top = nuevoTop;
}

function cambiarLeft(imagen, nuevoLeft) {
  imagen.style.left = nuevoLeft;
}


parent.addEventListener("mousedown", function () {
    document.body.addEventListener("mousemove", function (infoEvento) {
        console.log(
          "El mouse está en X: " + infoEvento.clientX + "Y: " + infoEvento.clientY
        );
        cambiarTop(imagen, infoEvento.clientY);
        cambiarLeft(imagen, infoEvento.clientX);
      });
})

