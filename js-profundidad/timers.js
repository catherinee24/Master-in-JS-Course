'use strict'
/**
 * TIMERS
 * 1️⃣ setInterval => Nos permite ejecutar un trozo de cogido cada cierto tiempo.
 * 2️⃣ setTimeout => solamente se va a estar ejecutando una vez cada cierto tiempo (que le indicamos en este caso 3000 = 3 seg).
 *
 * La diferencia es que setInterval se ejecuta sin fin y setTimeout el tiempo que le agregamos. 👍
 */

window.addEventListener('load', () => {
    function interval() {
        var tiempo = setInterval(() => {
            console.log('Set interval ejecutado')

            var encabezado = document.querySelector('h1')
            if (encabezado.style.fontSize == '50px') {
                encabezado.style.fontSize = '35px'
            } else {
                encabezado.style.fontSize = '50px'
            }
        }, 2000)
        return tiempo
    }

    var tiempo = interval()

    var stop = document.querySelector('#stop')

    stop.addEventListener('click', () => {
        // creamos un metodo que se llame clearInterval
        clearInterval(tiempo)
        // que aparezca este alert cuando lo ejecute
        alert('has parado el intervalo en bucle')
    })

    var start = document.querySelector('#start')
    start.addEventListener('click', () => {
        // Para poder ejecutar nuevamente el bucle
        interval()
        alert('Has iniciado nuevamente el bucle 👍')
    })
})
