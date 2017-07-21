var api = {
    register: "http://localhost:3000/api/registerNumber",
    newCode: "http://localhost:3000/api/resendCode",
    user: "http://localhost:3000/api/createUser",
    card: "http://localhost:3000/api/registerCard"
}
var checkCode = $("#code").val();
var tiempo = 21;

var contador = function () {
    $('#numSms').text(sessionStorage.getItem("numRes"));
    verificarCodigo();
}
var verificarCodigo = function () {
    console.log(sessionStorage.getItem("codigo"))
    $("#code").keyup(function () {
        if ($(this).val().length === sessionStorage.getItem("codigo").length) {
            $("#btn-verificar").removeClass('hidden');
            $("#btn-verificar").click(compararCodigos);
        };
    });
};
var compararCodigos =  function (){
    if (checkCode == sessionStorage.getItem("codigo")) {
                window.location.href = "http://localhost:3000/views/ususrio.html"
            } else {
                countdown();
            }
    
}
var countdown = function () {
    setTimeout('timer()', 1000)
}
var timer = function () {
    $("#segundos").val(tiempo);
    console.log(tiempo);
    if (tiempo >= 1) {
        tiempo = tiempo - 1
        countdown();
    } else if (tiempo === 0) {
        nuevoCodigo();
        $('#codigo-modal').modal('open');
    }
}
var nuevoCodigo = function () {
    console.log("alto")
    $.post(api.newCode, {
        "phone": sessionStorage.getItem("numRes"),
    }, function (response) {
        console.log(response);
        $("#codeModalNew").text(response.data);
        sessionStorage.setItem("codigo", response.data);
    })
};
$(document).ready(contador);
