'use strict'
/**
 * HACER UN PROGRAMA QUE MUESTRE TODOS LOS NUMEROS ENTRES DOS NUMEROS INTRODUCIDOS POR EL USUARIO
 */

let numeroUno = parseInt(prompt('Introduce el primer numero', 0))
let numeroDos = parseInt(prompt('Introduce el segundo numero', 0))

document.write('<h1>De ' + numeroUno + ' a ' + numeroDos + ' estan estos numeros: </h1>')

for (let i = numeroUno; i <= numeroDos; i++) {
    document.write(i + '<br/>')
}
