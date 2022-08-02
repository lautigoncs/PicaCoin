const btn = document.getElementById('button');

document.getElementById('aboutContactArea').addEventListener('submit', function (event) {
        event.preventDefault();
        const serviceID = 'default_service';
        const templateID = 'template_5tfi1sr';
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                document.getElementById('aboutContactArea').reset();
                document.getElementById('Log').innerHTML = `<div class="alert alert-dark alertForm" role="alert"> Mensaje enviado!</div>`
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });
    });