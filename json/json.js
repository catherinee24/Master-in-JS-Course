'use strict'
/**
 * JSON => Javascript Object Notation ↩
 * Lo vimos en Henry y en codealo como diccionarios
 */

window.addEventListener('load', () => {
    let movie = {
        title: 'Fast and Furious',
        year: '2015',
        country: 'EE.UU',
    }

    // Array de objetos ⬇️
    let movies = [
        {
            title: 'the truth hurts',
            year: '2022',
            country: 'colombia',
        },
        movie,
    ]

    //console.log(movies)

    let box_movies = document.querySelector('#movies')
    for (let i in movies) {
        let paragraph = document.createElement('p')
        paragraph.append(movies[i].title + ' - ' + movies[i].year)
        // add some style to the fonts
        paragraph.style.fontSize = '20px'
        paragraph.style.fontFamily = 'arial'
        paragraph.style.margin = '30px'
        // Add everything we want in the box
        box_movies.append(paragraph)
    }
})
