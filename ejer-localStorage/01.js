'use strict'

window.addEventListener('load', () => {
    let form = document.querySelector('#form_movie')
    form.addEventListener('submit', () => {
        let title = document.querySelector('#add_movie').value
        // hacer un declaracion que no nos permita guardar nada en el localStorage
        if (title.length >= 1) {
            localStorage.setItem(title, title)
        }
    })

    let ul = document.querySelector('#movie_list')
    for (let i in localStorage) {
        if (typeof localStorage[i] == 'string') {
            let li = document.createElement('li')
            li.append(localStorage[i])
            li.style.fontSize = '16px'
            li.style.fontFamily = 'arial'
            ul.append(li)
        }
    }

    // delete form
    let deleteF = document.querySelector('#form_delete')
    deleteF.addEventListener('submit', () => {
        let title = document.querySelector('#delete_movie').value
        // hacer un declaracion que no nos permita guardar nada en el localStorage
        if (title.length >= 1) {
            localStorage.removeItem(title)
        }
    })
})
