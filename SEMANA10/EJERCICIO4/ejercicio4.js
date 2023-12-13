'use strict'

//Escribir un programa que obtenga las iniciales de un jugador de futbol, sabiendo que se usa iniciales y numero. Ejemplo CR-7, LM-10, LFS-10, AV-25

/*#Ejemplo
Entrada: MAGB-20
Salida: MAGB*/

let player = "CR-7";
let after = player.indexOf("-");

let iniciales = player.substring(0,after);

alert(iniciales);