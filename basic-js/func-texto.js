'use strict'
// Metodos para procesar texto: 
// PRPOIEDADES O METODOS QUE NOS VAN A PERMITIR TRANSFORMAR TEXTOS:
 
let numero = 444
let texto1 = "Vamos a ser las mejores programadoras del mundo"
let texto2 = "Porque lo estamos trabajando"

// Metdo para convertir de numero a String .toString()
let dato = numero.toString()

// metodo para convertir un texto to en Mayusculas .toUpperCase()
dato = texto1.toUpperCase() 

// metodo para convertir un texto en Minuscula .toLowerCase()
dato = texto2.toLowerCase() 
//console.log(dato)

//Propiedad para calcular la longitud de un texto .length()
let nombre = "catherine mendez"
//console.log(nombre.length)

//Concatenar: Significa Unir textos .concat 
// Opcion 1 ⏬ 
//let textoCompleto = texto1 + " " + texto2
//opcion 2 ⏬
let textoCompleto = texto1.concat( " " +texto2)
console.log(textoCompleto)







