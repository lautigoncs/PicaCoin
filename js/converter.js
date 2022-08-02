let historial = []

//Selecciono el input y le atribuyo la función de calculo.
document.getElementById('picAmountInput').onchange = usdValueCalc()  
function usdValueCalc() {
    // Dejo sabido el precio de la moneda en la consola.
    console.log("1 PIC = " + debuggingMCValue + " USD");

    //Declaro la variable según el valor ingresado en el input.
    let picValue = document.getElementById('picAmountInput').value;
    console.log("Cantidad de PIC de usuario: " + picValue);

    //Declaro el precio a USD de PIC.
    let usdValue = picValue * debuggingMCValue;
    console.log(picValue + " PICs son " + usdValue + " dólares");

    //Guardo los valores en el array.
    historial.unshift(picValue + " PIC = " + usdValue + " USD");
    console.log(historial);
    return usdValue;
}
// Boton de conversion 👇.
document.getElementById('converterButton').onclick = () => {
    // Si el input esta vacio, muestro un mensaje de error.
    if (document.getElementById('picAmountInput').value == 0) {
        Swal.fire ({
            title: 'Error',
            text: 'Por favor, ingresar una cantidad.',
            icon: 'error',
        }) 
        // Le agrego el estilo de error.
        document.getElementById('picAmountInput').classList.add('is-invalid');
    // SI el input no esta vacio, muestro el resultado.
    } else {
        //Le saco el estilo de error por si ya estaba.
        document.getElementById('picAmountInput').classList.remove('is-invalid');
        let finalValue = document.forms["picCoinsToUSD"]["usd"];
        finalValue.setAttribute('value', usdValueCalc() + ' USD');
    }
}
