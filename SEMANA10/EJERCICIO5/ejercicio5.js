'use strict'

//Escribir un programa para obtener el nombre de usuario de un correo electrónico.

/*#Ejemplo
Entrada: nombredeuser@magbdigital.net
salida: nombredeuser*/

let correo = "fato.97.es@gmail.com";

let after = correo.indexOf("@");
let nameUser = correo.slice(0, after);

alert(nameUser);