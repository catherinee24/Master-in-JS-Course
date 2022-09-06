'use strict'
/**
 * Local storage => Es como una memoria. Almacena info dentro del navegador que persiste mientras estamos navegando.
 */

window.addEventListener('load', () => {
    // Comprobando que el navegador sea compatible con localStorage ⬇️
    if (typeof Storage !== 'undefined') {
        console.log('Local storge esta disponible')
    } else {
        console.log('Local storge no esta disponible')
    }

    // guardar datos en el localStorage ⬇️
    localStorage.setItem('title', 'learning how to save info into the localStorage')

    // recuperar elemento y agregarlo donde queramos ⬇️
    //console.log(localStorage.getItem('title'))
    document.querySelector('#movies').innerHTML = localStorage.getItem('title')

    // Guardar objetos en el Local Storage ⬇️
    // para hacer esto es necesario convertir los datos a string

    let user = {
        name: 'catella',
        email: 'catellatech@gmail.com',
        web: 'catella.com',
    }
    // para hacer esto es necesario convertir los datos a string y JSON cuenta con el:
    //stringify()
    localStorage.setItem('usuarios', JSON.stringify(user))

    // Recupera objetos ⬇️ => Utilizamos el metodo JSON.parse, que lo que hace es convertir  el json string en un objeto de javascipt.
    let getUser = JSON.parse(localStorage.getItem('usuarios'))
    console.log(getUser)
    document.querySelector('#movies').append(' ' + user.name)

    // Para eliminar algo del local storage solo usamos removeItem() ⬇️
    localStorage.removeItem('usuarios')

    // Para limpiar el local storage utilizamos el metodo clear() ⬇️
    localStorage.clear()
})
