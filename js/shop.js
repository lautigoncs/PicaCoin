// Hago que el carrito guardado en el storage sea el valor de cart.
let cart = JSON.parse(localStorage.getItem('cartContent')) || [];
// Refresco los valores del html.
refreshHTMLValues()

//Botón de agregar al carrito.
document.getElementById('shopAgregarCarrito').onclick = () => {
    // Agarro la cantidad deseada por el comprador.
    let shopAmountInput = document.getElementById('shopAmountPicker').value;
    if (shopAmountInput > 0) {
        // Lo pusheo en el carrito y lo logueo en la consola 👇
        cart.push({ amount: shopAmountInput });
        console.log(cart);
        // Guardo todo en el storage.
        const cartJSON = JSON.stringify(cart);
        localStorage.setItem('cartContent', cartJSON);
        // Actualizo los valores que aparecen en el html.
        refreshHTMLValues();
    } else { // Si el valor deseado por el usuario es menor a 0, salta una alerta de Sweet Alerts.
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, introducir un número mayor a 0.',
        })
    }
}
//El mismo boton para agregar al carrito, pero para borrar.
document.getElementById('shopBorrarCarrito').onclick = () => {
    // Agarro la cantidad deseada por el comprador.
    let shopAmountInput = document.getElementById('shopAmountPicker').value;
    if (shopAmountInput > 0) {
        // Lo saco en el carrito y lo logueo en la consola 👇
        cart.pop({ amount: shopAmountInput });
        console.log(cart);
        // Guardo todo en el storage.
        const cartJSON = JSON.stringify(cart);
        localStorage.setItem('cartContent', cartJSON);
        // Actualizo los valores que aparecen en el html.
        refreshHTMLValues();
    } else { // Si el valor deseado por el usuario es menor a 0, salta una alerta de Sweet Alerts.
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, introducir un número mayor a 0.',
        })
    }
}

//Boton de checkout
document.getElementById('shopCheckout').onclick = () => {
    let space = document.getElementById('popupContent');
    //Aparece la interfaz de checkout.
    space.innerHTML = `
    <div id="popupBackground">
        <div class="popupBody">
        <button id="popupCloseButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
        </button>
            <div class="p-4 d-flex flex-column justify-content-around">
                <p class="checkoutWallet">0x7e562c0246E0b4E9364181CC755756163EaBa32d</p>
                <p class="checkoutText">Transferir <span id="checkoutETHAmount"></span> USD en forma de ETH a la dirección de wallet indicada a través de la red ERC-20. Una vez nos llegue la cantidad, tus PICS se guardarán en tu pic-wallet. Cuando estén allí, podrás transferirlas a tu wallet preferida.</p>
                <button type="button" class="btn btn-outline-secondary" id="popupConfirmationButton">¿Ya transferiste?</button>
            </div>
            <img src="../assets/shop/checkout/qr.png" class="p-4">
        </div>
        <div id="bgClosePopup"></div>
    </div>
    `
    //Si se toca la X se cierra el checkout.
    document.getElementById('popupCloseButton').onclick = () => {
        closePopup();
    }
    //Y si se toca el fondo también se cierra la interfaz de inicio de sesión.
    document.getElementById('bgClosePopup').onclick = () => {
        closePopup();
    }
    //El valor que apaece en el checkout es el que el usuario quiere comprar.
    document.getElementById('checkoutETHAmount').innerHTML = cart.reduce((acumulador, producto) => acumulador + (producto.amount * debuggingMCValue), 0)
    //Defino el botón de confirmación.
    let transactionButton = document.getElementById('popupConfirmationButton');
    //Si se toca el botón, cambia el texto a un spinner.
    transactionButton.onclick = () => {
        transactionButton.innerHTML = `
        <div class="spinner-border" role="status" id="popupSpinner">
            <span class="visually-hidden">Loading...</span>
        </div>
        `
        //Timeout para que se vea el spinner.
        setTimeout(() => {
            //Cambia el texto a un "error".
            transactionButton.innerHTML = `
            <p class="m-0">Error de servidor. Vuelva a intentar más tarde.</p>
            `
            //Timeout para que se vea el error.
            setTimeout(() => {
                closePopup()
            }, 3000)
        }, 5000)
    }
}

//Función para refrescar el valor de los elementos del DOM.
function refreshHTMLValues() {
    // Hago que shoppingCartTotalAmount sea la suma de la cantidad de coins que el comprador quiera.
    const shoppingCartTotalAmount = cart.reduce((acumulador, producto) => acumulador + parseInt(producto.amount), 0);
    // Y lo muestro en el dom.
    document.getElementById('cartAmount').innerHTML = shoppingCartTotalAmount;
    // y shoppingCartTotalPrice es lo mismo que el de arriba, pero con el precio de la cantidad de coins.
    let shoppingCartTotalPrice = cart.reduce((acumulador, producto) => acumulador + (producto.amount * debuggingMCValue), 0);
    // Y lo muestro en el dom.
    document.getElementById('cartTotal').innerHTML = shoppingCartTotalPrice;
    // En caso de que el resultado del precio sea NAN (lo hace a veces), mostrar ERROR.
    shoppingCartTotalPrice = shoppingCartTotalPrice || "ERROR"
}

