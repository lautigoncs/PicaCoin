let space = document.getElementById('popupContent');

// LOGIN //
document.querySelector('.loginBtn').onclick = () => {
    //Aparece la interfaz de inicio de sesión.
    space.innerHTML = `
    <div id="popupBackground">
        <div class="userBody justify-content-center">
            <button id="userCloseButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
            </button>
            <div class="p-4 d-flex flex-column justify-content-around w-100">
                <p class="userTitle fontPrimary ">Iniciar Sesión</p>
                <div class="fontSecondary">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingUsername" placeholder="Usuario/Email" required>
                        <label for="floatingInput">Usuario/Email</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña" required>
                        <label for="floatingPassword">Contraseña</label>
                    </div>
                </div>
                <button type="button" class="btn btn-outline-secondary fontSecondary" id="popupConfirmationButton">Iniciar Sesión</button>
            </div>
        </div>
        <div id="bgClosePopup"></div>
    </div>
    `
    //Si se toca la X se cierra la interfaz de inicio de sesión.
    document.getElementById('userCloseButton').onclick = () => {
        closePopup();
    }
    //Y si se toca el fondo también se cierra la interfaz de inicio de sesión.
    document.getElementById('bgClosePopup').onclick = () => {
        closePopup();
    }
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
            <p class="m-0">No se encuentra el usuario. Intente de nuevo más tare.</p>
            `
            //Cambiar los inputs a erores
            document.getElementById('floatingUsername').classList.add('is-invalid');
            document.getElementById('floatingPassword').classList.add('is-invalid');
        }, 5000)
    }
}

// REGISTER //
document.querySelector('.registerBtn').onclick = () => {
    //Aparece la interfaz de registro.
    space.innerHTML = `
    <div id="popupBackground">
        <div class="userBody justify-content-center">
            <button id="userCloseButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
            </button>
            <div class="p-4 d-flex flex-column justify-content-around w-100">
                <p class="userTitle fontPrimary ">Registrarse</p>
                <div class="fontSecondary">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingUsername" name="username" placeholder="Usuario" required>
                        <label for="floatingUsername">Nombre de Usuario</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingEmail" name="email" placeholder="Email" required>
                        <label for="floatingEmail">Email</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" name="password" placeholder="Contraseña" required>
                        <label for="floatingPassword">Contraseña</label>
                    </div>
                </div>
                <button type="submit" class="btn btn-outline-secondary fontSecondary" id="popupConfirmationButton">Siguiente paso <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg></button>
            </div>
        </div>
        <div id="bgClosePopup"></div>
    </div>
    `
    //Si se toca la X se cierra la interfaz de registro.
    document.getElementById('userCloseButton').onclick = () => {
        closePopup();
    }
    //Y si se toca el fondo también se cierra la interfaz de inicio de sesión.
    document.getElementById('bgClosePopup').onclick = () => {
        closePopup();
    }
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
            //Cambiar los inputs a erores
            document.getElementById('floatingUsername').classList.add('is-invalid');
            document.getElementById('floatingEmail').classList.add('is-invalid');
            document.getElementById('floatingPassword').classList.add('is-invalid');
            //Timeout para que se vea el error.
        }, 5000)
    }
}

//Funcion para cerrar la interfaz.
function closePopup() {
    //Cierra el checkout con un fadeout.
    document.getElementById('popupBackground').classList.add('fadeOut');
    //Timeout para que se vea el fadeout.
    setTimeout(() => {
        //Elimina el elemento.
        space.innerHTML = "";
    }, 500);
}