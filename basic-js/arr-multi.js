'use strict'
/**
 * Array Multidimensional => Son arrays dentro de otros arrays.
 */

let categoria = ['Super-Heros', 'terror']
let peliculas = ['iron-man', 'captain america', 'avengers']

// array multidimensional 1️⃣
let cine = [categoria, peliculas]

// accediendo a los arrays multidimensionales
console.log(cine[0][0])
console.log(cine[1][2])

//////////////////////////////////////////////////////////////////

// operaciones con arrays  2️⃣

let elemento = ' '

do {
    elemento = prompt('Introduce la pelicula que quieras! 🍿')
    peliculas.push(elemento) // añade un elemento al array
} while (elemento != 'acabar')

peliculas.pop() //.pop() elimina el ultimo elemento del array

/////////////////////////////////////////////////////////////////////
// Para eliminar un elemento especifico en el array: 3️⃣
let index = peliculas.indexOf('iron-man')
if (index > -1) {
    peliculas.splice(index, 1)
}
console.log(peliculas)

///////////////////////////////////////////////////////////////////////////////

//para convertir un array a texto: 4️⃣
let pelicula_string = peliculas.join()
console.log(pelicula_string)

//////////////////////////////////////////////////////////////////////////

//para convertir un cadena en array: 5️⃣
// separar el texto por comas para que nos agarre
let cadena = 'you are the best'
let cadena_arr = cadena.split(' ')
console.log(cadena_arr)

/////////////////////////////////////////////////////////////////////////////
// 6️⃣ sort => para ordernar un array por orden alfabetico y para ordenar numeros 

let arrEquis = ['estas', 'como', 'hola']
arrEquis.sort()
console.log(arrEquis)

/////////////////////////////////////////////////////////////////////////////
// 7️⃣ reverse()

let arrOne = ['estas', 'como', 'hola']
arrOne.reverse()
console.log(arrOne)

/////////////////////////////////////////////////////////////////////////
// 8️⃣ for in  => Para recorrer un array

let arrAnother = ['estas', 'como', 'hola']

document.write('<h1>Lista</h1>')
document.write('<ul>')
for (let another in arrAnother) {
    document.write('<li>' + arrAnother[another] + '<li/>')
}
document.write('<ul/>')

///////////////////////////////////////////////////////////////////////////
// 9️⃣ Busqueda de un array => find()

let busquedaOne = arrAnother.find((arrOther) => {
    return arrOther == 'como'
})
console.log(busquedaOne)
