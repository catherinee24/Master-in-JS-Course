'use Strict'

/**
 * Tenemos que hacer un programa que nos pida dos numeros
 * & que nos diga cual es el mayor y cual es le menor
 * & si son iguales.
 *
 * ➕ Plus = si los numeros no son numeros, o son menores a 0, hacer que el programa nos vuelva a pedir un valor correcto
 */

/**
 * 💡 parseInt(): Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.

* Sintaxis : `parseInt(string, base);`
 
* Parámetros:
`cadena` ⛓️ : Una cadena que representa el valor que se desea convertir.
`base`: Un entero que representa la base de la mencionada cadena. 

 */

let numeroUno = parseInt(prompt('Introduce el primer numero', 0))
let numeroDos = parseInt(prompt('Introduce el segundo numero', 0))

while (numeroUno <= 0 || numeroDos <= 0 || isNaN(numeroUno) || isNaN(numeroDos)) {
    numeroUno = parseInt(prompt('Introduce el primer numero', 0))
    numeroDos = parseInt(prompt('Introduce el segundo numero', 0))
}

// programa para saber si los numeros son <, > o ==
if (numeroUno == numeroDos) {
    alert('Los numeros son iguales!')
} else if (numeroUno > numeroDos) {
    alert('El numero mayor es: ' + numeroUno)
    alert('El numero menor es: ' + numeroDos)
} else if (numeroDos > numeroUno) {
    alert('El numero mayor es: ' + numeroDos)
    alert('El numero menor es: ' + numeroUno)
} else {
    alert('⚠️ Por favor,introduce un numero correcto')
}
// It works
