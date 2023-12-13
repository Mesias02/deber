'use strict'

//Escribir un programa que obtenga el mes de la siguiente fecha: “2022-10-31”

/*#Ejemplo:
codigo: "2022-10-31"
salida: 10*/

let fecha = "2022-10-31"

let after = fecha.indexOf("-");
let mes = fecha.slice(fecha.indexOf("-")+1);

alert(mes);