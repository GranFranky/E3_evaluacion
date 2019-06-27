// Autor: Fco Javier Pérez Patrón
// Fecha: 27/06/2019
// Ejercico evaluación MF0952_2: Publicación de Páginas Web

$(function(){   // ejcecuta la funcion para importar los datos del archivo JSON 
  $('#importar').click(importar);
});

function importar() {
    $.getJSON("tarjeta.json", function (result) {   // carga los datos importados en los campos del formulario
      $("#banco").val(result.TarjetaCredito.Banco);
      $("#numero1").val(result.TarjetaCredito.Numero[0]);
      $("#numero2").val(result.TarjetaCredito.Numero[1]);
      $("#numero3").val(result.TarjetaCredito.Numero[2]);
      $("#numero4").val(result.TarjetaCredito.Numero[3]);
      $("#fechaAnno").val(result.TarjetaCredito.FechaCaducidad[0]);
      $("#fechaMes").val(result.TarjetaCredito.FechaCaducidad[1]);
      $("#cvv").val(result.TarjetaCredito.CVV);
      $('#cargaOk').html(' Importación <i class="far fa-thumbs-up" aria-hidden="true"></i> ');   // muestra el icono de comfirmación de la importación de tatos
      borrar();   // ejecuta la finción que borra el icono pasados 3 segundos
    });
  }


function borrar() {     // función para "borrar" el icono
   setTimeout(function () {
     $("#cargaOk").html("");
   }, 3000);
}