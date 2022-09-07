'use strict'
/**
 * 1️⃣ Peticion AJAX => Es simplemente una llamada a un servicio REST o un API REST o a un backend que nos devuelve un resultado. Usamos el metodo Fetch() para hacer las peticiones AJAX.
 * 2️⃣ JSONPlaceholder => es una API REST en linea gratuita que puede usar siempre que necesita datos falsos.
 * Trabajando con JSONPlaceholder ⬇️ :
 * 1️⃣ Lo que vamos a hacer es un listado de POST o listado de usuarios.
 */

window.addEventListener('load', () => {
    let div_users = document.querySelector('#personas')
    let div_janet = document.querySelector('#janet')
    let usuarios = []
    // esto es una promesa con lo cual utilizamos el metodo them() para recoger datos

    // esto es para convertir un obj que nos llegan en json directamente
    getUsers()
        .then((data) => data.json()) // captura los datos y convertirlos a json
        .then((users) => {
            usuarios = users.data
            console.log(usuarios)
            usersList(users.data)

            return getJanet()
        })
        .then((data) => data.json())
        .then((janet) => {
            userJanet(janet.data)
        })

    function getUsers() {
        return fetch('https://reqres.in/api/users')
    }
    function getJanet() {
        return fetch('https://reqres.in/api/users/2')
    }

    function usersList(usuarios) {
        usuarios.map((user, i) => {
            let nombre = document.createElement('h2')
            nombre.innerHTML = `${i}. ${user.first_name} ${user.last_name} `
            div_users.appendChild(nombre)

            document.querySelector('.loading').style.display = 'none'
        })
    }

    function userJanet(user) {
        let nombre = document.createElement('h2')
        let avatar = document.createElement('img')

        nombre.innerHTML = `${user.first_name} ${user.last_name} `
        avatar.src = user.avatar
        avatar.width = '160'
        console.log(avatar)

        div_janet.appendChild(nombre)
        div_janet.appendChild(avatar)

        document.querySelector('#janet .loading').style.display = 'none'
    }
})
