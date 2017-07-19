var api = {
    url: "localhost:3000/api/registerNumber"
}
var cargarPagina = function () {
     $('.slider').slider();
    $('input#phone').characterCounter();
    terminoscheck();
}

var terminoscheck = function (){
    if ($("#phone").val.length == 10){
        console.log('contando');
        $("#continuar").removeClass( "disabled" );
    }
}

$(document).ready(cargarPagina);
