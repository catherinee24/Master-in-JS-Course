'use strict'

/**
 * Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
 */

let numeroUno = parseInt(prompt('Introduce el primer numero', 0))
let numeroDos = parseInt(prompt('Introduce el segundo numero', 0))

while (numeroUno < numeroDos) {
    numeroUno++ // Se le coloca el contador desde este para empezar a contar desde el numero introduciodo por el usurio.

    // esta es el codigo para ejecutar cuales son los impares.
    if (numeroUno % 2 != 0) {
        console.log('El ' + numeroUno + ' es impar')
    }
}
