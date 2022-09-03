'use strict'
/**
 * Hacer un programa que sea una calculadora que:
 * 1️⃣ Pida dos numeros por pantalla.
 * 2️⃣ Que si metemos uno mal nos lo vuelva a pedir.
 * 3️⃣ En el cuerpo de la pag, en una alerta y por consola el resultado de sumar,restar, multiplicar y dividir esas dos cifras.
 */

let numeroUno = parseInt(prompt('Introduce el primer numero', 0))
let numeroDos = parseInt(prompt('Introduce el segundo numero', 0))

while (numeroUno < 0 || numeroDos < 0 || isNaN(numeroUno) || isNaN(numeroDos)) {
    numeroUno = parseInt(prompt('Introduce el primer numero', 0))

    numeroDos = parseInt(prompt('Introduce el segundo numero', 0))
}

let resultado =
    'la suma es: ' +
    (numeroUno + numeroDos) +
    '<br/>' +
    'la resta es: ' +
    (numeroUno - numeroDos) +
    ' <br/>' +
    'la multiplicacion es: ' +
    numeroUno * numeroDos +
    ' <br/>' +
    'la division es: ' +
    numeroUno / numeroDos +
    ' <br/>'

let resultadoAlert =
    'la suma es: ' +
    (numeroUno + numeroDos) +
    '\n' +
    'la resta es: ' +
    (numeroUno - numeroDos) +
    ' \n' +
    'la multiplicacion es: ' +
    numeroUno * numeroDos +
    ' \n' +
    'la division es: ' +
    numeroUno / numeroDos +
    ' \n'

document.write(resultado)
alert(resultadoAlert)
console.log(resultadoAlert)
