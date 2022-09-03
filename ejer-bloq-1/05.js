'use strict'
/**
 * Muestre todos los numeros divisores de un numero introduce en prompt
 */

var numero = parseInt(prompt('Introduce el primer numer', 1))

for (let i = 1; i <= numero; i++) {
    // Un numero es divisor de otro numero cuando al divirlo entre si te da como resto 0
    if (numero % i === 0) {
        console.log('Divisor: ' + i)
    }
}
