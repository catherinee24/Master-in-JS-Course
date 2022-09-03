'use strict'
/**
 * HACER UN PROGRAMA QUE AL INTRODUCIR UN NUMERO NOS DE LA TABLA DE MULTIPLIZAR DE DICHO NUMERO
 */

let numero = parseInt(prompt('¿De que numero quieres la tabla? 🔢', 1))

document.write('<h1>Tabla del ' + numero + ' 🤓</h1>')
// Tabla del numero que el usuario introduzca 👍
for (let i = 1; i <= 10; i++) {
    document.write(i + ' x ' + numero + ' = ' + i * numero + '<br />')
}

// Todas las tablas ⬇️ decidi hasta el 20 para probarlo
for (let c = 1; c <= 20; c++) {
    document.write('<h1> Tabla del  ' + c + ' 👍 </h1>')
    for (let i = 1; i <= 10; i++) {
        document.write(i + ' x ' + c + ' = ' + i * c + '<br />')
    }
}
