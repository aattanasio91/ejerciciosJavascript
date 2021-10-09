var botones = document.body.querySelectorAll('button');
var img = document.body.querySelectorAll('img');

botones.forEach(element => {
    element.addEventListener("click", function() {
        var idImg = element.id + "Img";
        document.getElementById(idImg).classList.toggle("oculto")        
    });
});