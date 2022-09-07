'use strict'
/**
 * Esta seccion la tenemos en el index.html del fetch-and-ajax
 * 
 * si queremos buscar mas referecias con las fechas buscamos en Google
 * date object.
 */

window.addEventListener('load', () => {
    let fecha = new Date()
    let year = fecha.getFullYear()
    let month = fecha.getMonth()
    let day = fecha.getDate()
    let hour = fecha.getHours()
    let utc = fecha.getUTCHours()

    let text = `
    Year: ${year}
    Month: ${month}
    Day: ${day}
    Hour: ${hour}
    Utc Hour: ${utc}
    `
    console.log(text)
})
