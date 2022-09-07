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
    // promesas de encadenamiento
    getUsers()
        .then((data) => data.json()) // captura los datos y convertirlos a json
        .then((users) => {
            usuarios = users.data
            console.log(usuarios)
            usersList(users.data)

            return getInfo()
        })
        .then((data) => {
            console.log(data)
            return getJanet()
        })
        .then((data) => data.json())
        .then((janet) => {
            userJanet(janet.data)
        })
        .catch(error =>{
           console.log(error)
        })

    // funcion para obtener la API de lo que queramos mostrar en nuestro frontend

    function getUsers() {
        return fetch('https://reqres.in/api/users')
    }
    function getJanet() {
        return fetch('https://reqres.in/api/users/2')
    }

    // creando una promesa desde cero
    function getInfo() {
        let teacher = {
            name: 'Patrick',
            lastName: 'Collins',
            web: 'https://Patrick.com',
        }
        return new Promise((resolve, reject) => {
            let teacher_string = ''

            setTimeout(() => {
                teacher_string = JSON.stringify(teacher)

                if (typeof teacher_string != 'string' || teacher_string == '')
                    return reject('error❌')
                return resolve(teacher_string)
            }, 3000)
        })
    }

    // funciones para obtener los datos que queramos de la API

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

        div_janet.appendChild(nombre)
        div_janet.appendChild(avatar)

        document.querySelector('#janet .loading').style.display = 'none'
    }
})
