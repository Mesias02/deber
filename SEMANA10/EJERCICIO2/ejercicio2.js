'use strict'

/*Escribir un programa que permita obtener el numero de piso de un edificio de oficinas donde el formato de numeración de las oficinas  es:
 “01.24” lo que significa piso 1 oficina 24.*/

/* #Ejemplo:
codigo: "01.24"
salida: 01 */

let piso = "05.24";

let before = piso.indexOf(".");
let numeroPiso = piso.substring(0, before);

alert(numeroPiso);