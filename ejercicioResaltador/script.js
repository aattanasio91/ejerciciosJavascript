let parrafos = document.querySelectorAll("p");

parrafos.forEach(parrafo => {
    parrafo.addEventListener('click', function () {
        this.classList.toggle("resaltado");
    })
});