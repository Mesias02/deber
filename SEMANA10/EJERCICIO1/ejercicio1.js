'use strict'
//Escribir un programa de extraiga las parte numérica de una placa de un auto.

/*Ejemplo:
placa =”ABC-2030”
salida: 2030 */

let placa = "ABC-2030" ;

let guion = placa.indexOf ("-");

alert(placa.substring(guion+1))


