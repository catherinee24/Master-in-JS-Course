'use strict'
/**
 * 1️⃣ Peticion AJAX => Es simplemente una llamada a un servicio REST o un API REST o a un backend que nos devuelve un resultado. Usamos el metodo Fetch() para hacer las peticiones AJAX.
 * 2️⃣ JSONPlaceholder => es una API REST en linea gratuita que puede usar siempre que necesita datos falsos.
 * Trabajando con JSONPlaceholder ⬇️ :
 * 1️⃣ Lo que vamos a hacer es un listado de POST o listado de usuarios.
 */

window.addEventListener('load', () => {
    let div_users = document.querySelector('#personas')
    let usuarios = []
    // esto es una promesa con lo cual utilizamos el metodo them() para recoger datos
    fetch('https://reqres.in/api/users')
        // esto es para convertir un obj que nos llegan en json directamente
        .then((data) => data.json()) // captura los datos y convertirlos a json
        .then((users) => {
            usuarios = users.data
            console.log(usuarios)

            usuarios.map((user, i) => {
                let nombre = document.createElement('h2')
                nombre.innerHTML = `${i}. ${user.first_name} ${user.last_name} `
                div_users.appendChild(nombre)

                document.querySelector('.loading').style.display = 'none'
            })
        })
})
