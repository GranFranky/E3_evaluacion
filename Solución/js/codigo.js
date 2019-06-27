/* Autor: jlmerdiez
Fecha: 27/05/2019
Descripción: Ejercicio E1 de UF1306
Desarrollado con: Visual Studio Code */

/********** GESTIÓN DE EVENTOS **********/

$(function(){
	// Evento asociado al botón Importar
	$('#importar').click(importar);
});

// Carga el contenido de tarjeta.json en el formualario
function importar() {
	// Mediante AJAX leeemos el archivo JSON y cargamos su contenido en el formulario
	$.getJSON("tarjeta.json", function(result) {
		var tarjeta = result.TarjetaCredito;
		$('#banco').val(tarjeta.Banco);
		$('#numero_1').val(tarjeta.Numero[0]);
		$('#numero_2').val(tarjeta.Numero[1]);
		$('#numero_3').val(tarjeta.Numero[2]);
		$('#numero_4').val(tarjeta.Numero[3]);
		$('#anio').val(tarjeta.FechaCaducidad[0]);
		$('#mes').val(tarjeta.FechaCaducidad[1]);
		$('#cvv').val(tarjeta.CVV);
		// Pintamos el mensaje e icono de descarga Ok
		$('#cargaOk').html(' Importación <i class="fa fa-check-circle" aria-hidden="true"></i> ');
		// A los 3 segundos llamamos a la función que borra el mensaje
		setTimeout(borraOk, 3000);
  	});
}

// Borramos el mensaje de carga Ok
function borraOk() {
	$('#cargaOk').html('');
}