'use strict'
/**
 * Funciones anonimas => 1️⃣ Funciones que no tienen nombre y son guardadas en una variable. Se utiliza mayormente con FUNCIONES CALLBACKS => 2️⃣ Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
 */

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    let suma = numero1 + numero2
    sumaYmuestra(suma)
    sumaPorDos(suma)
    return suma
}

sumame(
    5,
    7,
    // funciones de callback
    function (dato) {
        console.log('La suma es: ' + dato)
    },
    function sumaPorDos(dato) {
        console.log('la suma por dos es: ' + dato * 2)
    }
)

///////////////////////////////////////////////////////////

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    let suma = numero1 + numero2
    sumaYmuestra(suma)
    sumaPorDos(suma)
    return suma
}

sumame(
    5,
    7,
    // funciones de =>
    (dato) => {
        console.log('La suma es: ' + dato)
    },
    (dato) => {
        console.log('la suma por dos es: ' + dato * 2)
    }
)
