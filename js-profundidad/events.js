'use strict'
/**
 * events => events => El evento (evento) es el corazón de la aplicación JavaScript para interactuar para hacer que la página web se mueva. Cuando nosotros y la página web en el navegador.
 * Al usar JavaScript, puede monitorear la aparición de eventos específicos y estipular que algunos eventos respondan a estos eventos.
 */

// Funcion cambiar color cada vez que se le de click al boton
// evento load

window.addEventListener('load', () => {
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

    // Seleccionamos la id del html del boton
    var boton = document.querySelector('#boton')
    // addEventListener() es mejor practica
    // click event
    boton.addEventListener('click', () => {
        cambiarColor()
    })

    // Mouse over event 🖱️
    boton.addEventListener('mouseover', () => {
        boton.style.background = 'black'
        boton.style.color = 'white'
    })

    // Mouseout event 🖱️
    boton.addEventListener('mouseout', () => {
        boton.style.background = 'pink'
        boton.style.color = 'white'
    })

    //////////////////////////////////////////////////7////////////////////////////
    // eventos de teclado y foco
    /**
     * Varios eventos son :
     * focus => dentro del input
     * blur => fuera del input
     * keydown => ocurre cuando estas pulsando una tecla
     * keypress => cuando ya la tecla esta presionada
     * keyup => tecla soltada
     */

    // focus
    var input = document.querySelector('#campo_nombre')

    input.addEventListener('focus', () => {
        console.log('estas dentro del input')
    })

    // blur
    input.addEventListener('blur', () => {
        console.log('estas fuera del input')
    })

    // keydown
    // string.fromCharCode([LO QUE QUIERAS VER].keyCode)
    // lO QUE QUIERAS VER, en este caso es el parametro en el callback
    input.addEventListener('keydown', (event) => {
        console.log('estas pulsando esta tecla', String.fromCharCode(event.keyCode))
    })

    // keypress
    input.addEventListener('keypress', (event) => {
        console.log('tecla presionada', String.fromCharCode(event.keyCode))
    })

    // keyup
    input.addEventListener('keyup', (event) => {
        console.log('tecla soltada', String.fromCharCode(event.keyCode))
    })
}) // end load

// el evento load nos ayuda a mantener nuestro script en HTML en el head de nuestra pagina
