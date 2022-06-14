document.getElementById("btn__enviar").addEventListener("click", solicitaEmoji);


function solicitaEmoji() {
    let suma_errores = 0;
    let x = document.getElementById("input__emoji1").value;
    let y = document.getElementById("input__emoji2").value;
    let z = document.getElementById("input__emoji3").value;

    suma_errores = parseInt(x) + parseInt(y) + parseInt(z);
    if (suma_errores >= 0 && suma_errores <= 10) {
        document.getElementById("mensaje_error").innerHTML =  `Llevas ${suma_errores} stickers`
    } else {
        document.getElementById("mensaje_error").innerHTML = "Excediste la cantidad solicitada";
    }
}

