'use strict'
/**
 * Utilizando un bucle mostrar la media y la suma de los resultados introducidos por el usuarios.
 * Hasta que el usuario meta un numero negativo.
 */

let suma = 0
let contador = 0
let numero = parseInt(prompt('Introduce numeros hasta que sea negativo', 0))

do {
    if (isNaN(numero)) {
        numero = 0
    } else if (numero >= 0) {
        suma = suma + numero
        //suma += numero
        contador++
    }
    console.log(suma)
    console.log(contador)
} while (numero >= 0)
alert('La suma de todos los numeros es: ' + suma)
alert('La media de todos los numeros es: ' + suma / contador)
