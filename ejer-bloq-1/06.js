'use strict'
/**
 * Hacer un programa que nos diga si un numero es par o impar.
 * 1. Ventana prompt
 * 2. Si no es valido que nos pida de nuevo el numero.
 */

let numero = parseInt(prompt('Introduce un numero', 0))

// PARA ASEGURARNOS DE QUE EVALUE EL TIPO DE DATO DE NUMERO
while (isNaN(numero)) {
    numero = parseInt(prompt('Introduce un numero', 0))
}

// OPERACION PARA SABER SI UN NUMERO ES PAR O IMPAR
if (numero % 2 === 0) {
    alert('numero es par!  👍')
} else {
    alert('numero es impar 👎')
}
