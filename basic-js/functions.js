'use strict'
/**
 * FUNCIONES => Son un conjunto de ordenes que se van a ejecutar cuando nosotros las invoquemos. 👍
 *
 * Es una agrupacion reutilizable de un conjunto de instrucciones
 */
//Functions
function calculadora() {
    //Conjuntos a ejecutar
    console.log('Hola, soy la calculadora')
    console.log('Si, soy la calculadora')
}
//Invocar o llamar la funcion
calculadora()

/**
 * PARAMETROS => Son variables que van alterar la logica o el resultado que nos va a devolver la funcion.(De esta manera podemos hacer mucho mas reutilizable nuestra funcion) 👍
 */

function calculadora(numeroUno, numeroDos) {
    console.log('la suma es: ' + (numeroUno + numeroDos))

    console.log('la resta es: ' + (numeroUno - numeroDos))

    console.log('la multiplicacion es: ' + numeroUno * numeroDos)

    console.log('la division es: ' + numeroUno / numeroDos)
}

// Invocar o llamar a la funcion
//console.log(10, 3)

// Podemos incluir la funcion en un bucle
for (let i = 1; i <= 10; i++) {
    // este console log nos muestra cada iteracion
    console.log(i)
    calculadora(i, 9)
}
