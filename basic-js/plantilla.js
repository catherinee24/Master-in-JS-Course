'use strict'

// Plantillas de texto

let nombre = prompt('Introduce tu nombre')
let apellido = prompt('Introduce tu apellido')

let texto = `<h1>Hola, a todos 👋</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h2>Mi apellido es: ${apellido}</h2>`

document.write(texto)

