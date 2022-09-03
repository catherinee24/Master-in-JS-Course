'use strict'
/**
 * events => events => El evento (evento) es el corazón de la aplicación JavaScript para interactuar para hacer que la página web se mueva. Cuando nosotros y la página web en el navegador.
 * Al usar JavaScript, puede monitorear la aparición de eventos específicos y estipular que algunos eventos respondan a estos eventos.
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
