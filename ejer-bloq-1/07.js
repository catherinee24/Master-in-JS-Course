'use strict'
/**
 * HACER UN PROGRAMA QUE AL INTRODUCIR UN NUMERO NOS DE LA TABLA DE MULTIPLIZAR DE DICHO NUMERO
 */

let numero = parseInt(prompt('ΒΏDe que numero quieres la tabla? π’', 1))

document.write('<h1>Tabla del ' + numero + ' π€</h1>')
// Tabla del numero que el usuario introduzca π
for (let i = 1; i <= 10; i++) {
    document.write(i + ' x ' + numero + ' = ' + i * numero + '<br />')
}

// Todas las tablas β¬οΈ decidi hasta el 20 para probarlo
for (let c = 1; c <= 20; c++) {
    document.write('<h1> Tabla del  ' + c + ' π </h1>')
    for (let i = 1; i <= 10; i++) {
        document.write(i + ' x ' + c + ' = ' + i * c + '<br />')
    }
}
