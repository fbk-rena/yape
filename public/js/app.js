var api = {
    url: "localhost:3000/api/registerNumber"
}
var $telefono = $('#phone').val;
var cargarPagina = function () {
    $('.slider').slider();
    validarRegistro();
}
/*$.post(api.url,{
    phone: $telefono,
    terms: true
}).then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
});
*/
var validarRegistro = function () {
    ($telefono).change(function(){
         var checked = true;

    if ($telefono.length > 10) {
        checked = false;
        console.log('contando');
    }
    if ($telefono.length < 10) {
        checked = false;
    }
    if (!$("#terms").checked) {
        checked = false;
    }
    
    return checked;
    }
    ); 
}

$(document).ready(cargarPagina);
