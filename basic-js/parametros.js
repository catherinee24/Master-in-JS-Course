'use strict'
/**
 * Parametros Rest(resto) & Spread(untado) => Cuando veamos "..." en el código, son los parámetros rest o el operador spread.

💡 Hay una manera fácil de distinguir entre ellos:

1️⃣ Cuando ... se encuentra al final de los parámetros de una función, son los “parámetros rest” y recogen el resto de la lista de argumentos en un array.
2️⃣ Cuando ... está en el llamado de una función o similar, se llama “operador spread” y expande un array en una lista.
 */

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log('Fruta uno: ', fruta1)
    console.log('Fruta dos: ', fruta2)
    console.log(resto_de_frutas) // llamando al parametro Rest
}
listadoFrutas('Manzana', 'Arandanos', 'Naranja', 'Pera', 'Banano')

let frutas = ['Manzana', 'Pera']
listadoFrutas(...frutas, 'Naranja', 'Pera', 'Banano') //llamando al “operador spread”


