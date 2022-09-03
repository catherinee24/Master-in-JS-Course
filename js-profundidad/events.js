'use strict'
/**
 * events =>
 */

var boton = document.querySelector('#boton')

function cambiarColor() {
    console.log('¡Me has presionado 👽!')
    var bg = boton.style.background
    if (bg == 'green') {
        boton.style.background = 'blue'
    } else {
        boton.style.background = 'green'
    }
    // esto sera cambios globles. 🌍
    boton.style.padding = '5px'
    boton.style.border = '1px solid #ccc'

    return true
}
