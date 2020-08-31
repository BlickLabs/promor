function success() {
    alert("Success")
    alertify.logPosition("bottom right");
    alertify.success("Correo enviado, gracias por contactarte con nosotros.");
    $('form[name="promor-contact-form"]')[0].reset();
}

function error() {
    alert("Error")
}

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

$('form[name="promor-contact-form"]').validate({
    name: 'required',
    email: 'required',
    messages: {
        name: "Por favor, introduce tu Nombre.",
        email: "Por favor, introduce un Correo Electrónico."
    },
    submitHandler: function (form) {
        var form = document.getElementById("contact-form");
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    },
    invalidHandler: function (event, validator) {
        var errors = validator.numberOfInvalids();
        alertify.logPosition("bottom right");
        alertify.error("Verifica tu información tienes " + errors + " errores.");
    }
});
