var api = {
    register: "http://localhost:3000/api/registerNumber",
    newCode: "http://localhost:3000/api/resendCode",
    user: "http://localhost:3000/api/createUser",
    card: "http://localhost:3000/api/registerCard"
}
//expresion para validar mail
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

var cargarPagina = function () {
    $('.slider').slider();
    soloNumeros();
    validarRegistro();
    $('.modal').modal();
    verificarCodigo();
}

var soloNumeros = function () {
    $(".solo-num").keyup(function () {
        this.value = this.value.replace(/[^0-9\.]/g, '');
    });
};
//Funciones pagina Registro
var telefonoIngresado = function () {
    $("#phone").keyup(function () {
        if ($(this).val().length === 10 ) {
            
            $("#terms").removeAttr("disabled");
        } else {
            $("#terms").attr("disabled", "disabled");
        };
    });
};
var checkbox = function () {
    $('#terms').click(function () {
        if ($(this).is(':checked')) {
            $('#continuar').removeClass('disabled');
        } else {
            $('#continuar').addClass('disabled');
        }
        registraNum();
    });
};
var registraNum = function () {
    $.post(api.register, {
        "phone": $("#phone").val(),
        "terms": true
    }, function (response) {
        /*console.log(response.success);
        if (response.success == false) {
            Materialize.toast('El número ya existe!', 2500);
            $("#phone").val("");
            $("#terms").attr("disabled", "disabled");
            $('#terms').attr('checked', false);
            $('#continuar').addClass('disabled');
            
        } else {
            /*console.log(response.data.phone);
        var numero = response.data.phone;
        console.log(numero);*/
            sessionStorage.setItem("numRes", response.data.phone);
            sessionStorage.setItem("codigo", response.data.code);
            console.log(sessionStorage.getItem("numRes"));
            console.log(sessionStorage.getItem("codeInicial"));
            $('#codeModal').text(sessionStorage.getItem("codigo"));
        }
    );
};
var validarRegistro = function () {
    telefonoIngresado();
    checkbox();
    console.log(localStorage.getItem("codigo"))
}
//Funciones pagina Codigo

   






$(document).ready(cargarPagina);
