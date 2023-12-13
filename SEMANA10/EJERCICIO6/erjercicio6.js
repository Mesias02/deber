'use strict'

//Escribir un programa que obtenga el nombre de usuario de facebook desde la url.

/*#Ejemplo
Entrada: facebook.com/nombreuser
Salida: nombreuser*/

let urlFacebook =  "facebook.com/cr7";

let post = urlFacebook.indexOf("/");
let nameFacebook = urlFacebook.slice(post+1);

alert(nameFacebook);