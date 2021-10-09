var input = document.getElementById("colorSelector");

input.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
        document.body.style.background = input.value;
    }
})

input.addEventListener("keydown", function (e) {
    if (e.key === 'Backspace') {
        document.body.style.background = "white";
    }
})