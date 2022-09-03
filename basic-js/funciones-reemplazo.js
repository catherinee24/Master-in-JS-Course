"use strict"

//FUNCIONES REEMPLAZO 
let numero = 444
let texto1 = "   Vamos a ser las mejores programadoras del mundo   "
let texto2 = "Porque lo estamos trabajando"

//remplazamos la palabra "mejores" por "the best" .replace()
let busqueda = texto1.replace("mejores", "the best")
console.log(busqueda)

//Metodo .slice()
let busqueda2 = texto1.slice(15)
console.log(busqueda2)

//metodo .split()
let busqueda3 = texto1.split(" ")
console.log(busqueda3)

//metodo trim() : quita los espacios por delante y por detras 

let busqueda4 = texto1.trim()
console.log(busqueda4)

