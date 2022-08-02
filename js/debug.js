//Cargo los valores del storage.
const storageValue = localStorage.getItem('MCValue')
// En caso de que no sea la la primera vez entrando a la página (Osea, el valor de storageValue no sea null), se carga el valor.
let debuggingMCValue = storageValue != null ? storageValue : 0.5;

// Texto del MC dentro del HTML.
document.getElementById('debugPrice').innerHTML = debuggingMCValue; 

// MENU 👇
document.getElementById('debuggingHeader').onclick = () => {
    Swal.fire({
        title: 'Debugging menu',
        html: 'Ingresar la equivalencia de 1PIC a USD' +
        '<input type="number" id="debuggingValue" value="0.5" class="debugInput">',
    })

    // Guardo el valor en el input de la ventana.
    let debugInputValue = document.getElementById("debuggingValue");
    debugInputValue.value = debuggingMCValue;

    document.getElementById('debuggingValue').onchange = () => {
        debuggingMCValue = document.getElementById('debuggingValue').value;
        console.log(debuggingMCValue);
        if (debuggingMCValue > 0) {
            document.getElementById('debugPrice').innerHTML = debuggingMCValue; 
            refreshHTMLValues();
            localStorage.setItem('MCValue', debuggingMCValue);
            return debuggingMCValue;
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, introducir un número mayor a 0.',
            })
            debuggingMCValue = 0.5;
            refreshHTMLValues();
        }
    }
}