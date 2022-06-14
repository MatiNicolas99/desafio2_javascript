document.getElementById("future_image").addEventListener("click", agregaBordes);
let contador = 0;

function agregaBordes() {
    let bordes = document.getElementById("future_image");
    if (contador == 0) {
    bordes.setAttribute("style", "border-style: solid; color: red; border-width: 2px");
    contador = 1;
    }else {
        bordes.setAttribute("style", "border-style: none; color: none; border-width: 0");
        contador = 0;
    }
}