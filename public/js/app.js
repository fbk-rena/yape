var api = {
    url: "http://localhost:3000/api/registerNumber"
}
//expresion para validar mail
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

var cargarPagina = function () {
    $('.slider').slider();
    soloNumeros();
    validarRegistro();
}

var soloNumeros = function () {
    $(".solo-num").keyup(function () {
        this.value = this.value.replace(/[^0-9\.]/g, '');
    });
};
var telefonoIngresado = function(){
    $("#phone").keyup(function () {
        if ($(this).val().length === 10) {
            $("#terms").removeAttr("disabled");
        } else {
            $("#terms").attr("disabled", "disabled");
        };
    });
};
var checkbox = function (){
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
    $.post(api.url, {
        "phone": $("#phone").val(),
        "terms": true
    },  function (response){
        console.log(response);
    });
};
var validarRegistro = function () {
    telefonoIngresado();
    checkbox();
}

$(document).ready(cargarPagina);
