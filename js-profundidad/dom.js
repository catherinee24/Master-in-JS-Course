'use strict'
/**
 * 1️⃣ DOM => Document Object Model
 * selectors ==> uno puede ser querySelector
 *
 * 2️⃣ Id vs Class => La diferencia entre una ID y una clase es que una ID se puede usar para identificar un solo elemento, mientras que una clase se puede usar para agrupar más de uno. 👍
 *
 * 3️⃣ La función append() => añade el contenido al final del elemento/capa que nosotros le especifiquemos.
 *
 * 4️⃣ En cambio la función prepend() => funciona exactamente igual, pero el contenido se añade al principio del elemento/capa que nosotros le especifiquemos.
 *
 * 5️⃣ Document.querySelectorAll() =>  El método querySelectorAll() de un Element devuelve una NodeList estática (no viva) que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.
 */

// conseguir elementos con id concreto 🟠

// 1️⃣ el innerHTML => devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.
// 2️⃣ el document.getElementById() => devuelve una referencia al elemento por su id.
var caja = document.getElementById('miCaja')

// otra manera de agarrar un id es con el querySelector()
var cajaUno = document.querySelector('#miCaja')

// si queremos cambiar lo que esta dentro del elemento podemos utilizar..
cajaUno.innerHTML = 'hola desde js 👋'
console.log(cajaUno)

// Como conseguir elementos por su etiqueta 🟠

var todosLosDivs = document.getElementsByTagName('div')
var valor
for (valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement('p')
        var texto = document.createTextNode(todosLosDivs[valor].textContent)
        parrafo.append(texto)
        miseccion.append(parrafo)
    }
}

console.log(todosLosDivs)

// Como conseguir elementos por su clase css 🟠
// getElementsByClassName() para muchas etiquetas

var divsRojos = document.getElementsByClassName('rojo')
var divsAmarillos = document.getElementsByClassName('amarillo')
// solo aplicamos esto porque solo es un elemento que queremos editar 👍
divsAmarillos[0].style.background = 'yellow'

// hacemos el bucle for .. in porque son dos elementos que queremos editar 🖌️
for (var div in divsRojos) {
    if (divsRojos[div].className == 'rojo') {
        divsRojos[div].style.background = 'red'
    }
}
console.log(divsRojos)

// Query Selector 💯 => es ideal para seleccionar un elemento (id o class)
var id = document.querySelector('#encabezado')
console.log(id)
