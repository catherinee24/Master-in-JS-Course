'use strict'

window.addEventListener('load', () => {
    console.log('DOM cargado ✌')
    // Llamamos nuestra id de formulario en el html y le creamos una variable para poder llamarla a las funciones que queramos hacer.

    let fomulario = document.querySelector('#formulario')
    let box_dashed = document.querySelector('.dashed')

    // creamos la funcion para que nos oculte el box dashed en nuestra pantalla para cuando el usuario le de submit se nos muestre
    // desapereciendo el box ⬇️
    box_dashed.style.display = 'none'

    fomulario.addEventListener('submit', () => {
        console.log('Evento submit capturado 🙌')

        // creando las variables de los valores que tenemos en html (nombre,apellido,edad)
        // el .value nos va a sacar los valor ingresados

        let nombre = document.querySelector('#nombre').value
        let apellido = document.querySelector('#apellido').value
        // pasamos la edad a un entero con el parsetInt()
        let edad = parseInt(document.querySelector('#edad').value)

        // Creando la validacion de los datos ingresados en el formulario ⤵️
        // utilizamos el metodo .trim() para que no tenga espacios por delante y por detras
        if (nombre.trim() == null || nombre.trim().length == 0) {
            //alert('El nombre no es valido'
            document.querySelector('#error_name').innerHTML = '⚠ Introduce un nombre valido!'
            return false
        } else {
            document.querySelector('#error_name').style.display = 'none'
        }

        if (apellido.trim() == null || apellido.trim().length == 0) {
            //alert('El apellido no es valido')
            document.querySelector('#error_apellido').innerHTML = '⚠ Introduce un valor valido!'
            return false
        } else {
            document.querySelector('#error_apellido').style.display = 'none'
        }

        if (edad == null || edad <= 0 || isNaN(edad)) {
            //alert('La edad no es validado')
            document.querySelector('#error_edad').innerHTML = '⚠ Introduce una edad valida!'
            return false
        } else {
            document.querySelector('#error_edad').style.display = 'none'
        }

        // mostrando la caja box dashed ⬇️
        box_dashed.style.display = 'block'

        // creamos el bucle for..in para mostrar los datos ingresados en el box del formulario y mostrarlo en el  box_dashed. ⬇️
        let datosUsuarios = [nombre, apellido, edad]
        for (let index in datosUsuarios) {
            let parrafo = document.createElement('p')
            parrafo.append(datosUsuarios[index])
            parrafo.style.fontSize = '20px'
            parrafo.style.fontFamily = 'arial'
            parrafo.style.margin = '30px'
            box_dashed.append(parrafo)
        }
    })
})
