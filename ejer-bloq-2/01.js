'use strict'
/**
 * Hacer un programa que:
 * 1️⃣ Pida 6 numeros por pantallas y los meta en un array
 * 2️⃣ Mostrar el array entero (todos sus elementos) en el cuerpo de la pantalla y de la consola
 * 3️⃣ Ordenarlo y mostrarlo.
 * 4️⃣ Invertir su orden y mostrarlo
 * 5️⃣ Mostrar cuantos elementos tiene el array
 * 6️⃣ Busqueda de un valor introducido por el usuario, que nos diga si esta en el array y que ademas nos diga su posicion.
 */

function mostrarArr(elementos, textoCustom = '') {
    document.write(`<h1>Mostrar el array ${textoCustom} </h1>`)
    document.write('<ul>')
    elementos.forEach((elemento, index) => {
        document.write(`<li>${elemento}</li>`)
    })
    document.write('</ul>')
}
// 1️⃣ Pedir 6 numeros por pantalla
//let numeros = new Array(6)
let numeros = []
for (let i = 0; i <= 5; i++) {
    //numeros[i]= parseInt(prompt("Inserte un numero", 0))
    numeros.push(parseInt(prompt('Inserte un numero', 0)))
}

// 2️⃣ Mostrar por pantalla
mostrarArr(numeros)

// 2️⃣ Mostrar por consola
console.log(numeros)

// 3️⃣ Mostrar y ordenar por pantalla y consola
numeros.sort()
console.log(numeros)
// Mostrando en pantalla
mostrarArr(numeros, 'de numeros ordenados ⏬')

// 4️⃣ Invertir su orden y mostrarlo
numeros.reverse()
console.log(numeros)
mostrarArr(numeros, 'de numeros invertidos 💞')

// 5️⃣ Mostrar cuantos elementos tiene el Array
document.write(`<h1>El array tiene: ${numeros.length} elementos 💯</h1>`)

// 6️⃣ busqueda del valor introducido por el usuario

let busqueda = parseInt(prompt('Busca un numero', 0))
let posiciones = numeros.findIndex((numero) => numero == busqueda)

if (posiciones && posiciones != -1) {
    document.write(`<hr/><h1>Encontrado 👍</h1>`)
    document.write(`<h1>Posicion de la busqueda: ${posiciones} </h1><hr/>`)
} else {
    document.write(`<hr/> <h1>No se ha encontrado 👎</h1>`)
}
