'use strict'
/**
 * Arrays
 * Index => en informatica los indices comienzan en la posicion 0
 */
// array normal
let nombre = ['juan', 'jose', 'pedro']

// De esta manera creamos el objeto array
let lenguajes = new Array('js', 'java', 'ts')

// Para saber la longitud de un array
console.log(nombre.length)

document.write('<h1>Muestrame los lenguajes</h1>')
document.write('<ul>')
for (let z = 0; z < lenguajes.length; z++) {
    document.write('<li>' + lenguajes[z] + '</li>')
}
document.write('</ul>')

///////////////////////////////////////////////////7

// tambien podemos utilizar el forEach()
lenguajes.forEach((elemento, indice) => {
    document.write('<li>' + indice + ' - ' + elemento + '</li>')
})

////////////////////////////////////////////

let elementos = parseInt(prompt('¿Que elementos del array quieres?', 0))
// en caso de que queramos enviar un error cuando introduzcan un numero mayor del length del array que estemos utilizando.

if (elementos >= lenguajes.length) {
    alert('Introduce un numero correcto menor que ' + lenguajes.length)
} else {
    alert('El lenguaje seleccionado es : ' + lenguajes[elementos])
}
