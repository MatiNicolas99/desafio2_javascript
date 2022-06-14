document.getElementById("boton__enviar").addEventListener("click", enviarPass);
let contador = 0;

function enviarPass () {
    let x = document.getElementById("select1").value;
    let y = document.getElementById("select2").value;
    let z = document.getElementById("select3").value;
    
    if (x == 9 && y == 1 && z == 1 && contador == 0) {
        contador ++;
        document.getElementById("mensaje").innerHTML = "Password 1 correcto";
    }else if (x == 7 && y == 1 && z == 4 && contador == 1) {
        contador ++;
        document.getElementById("mensaje").innerHTML = "Password 2 correcto";    
    }else {
        contador = 0;
        document.getElementById("mensaje").innerHTML = "Error, favor intenta nuevamente";
    }    
}
