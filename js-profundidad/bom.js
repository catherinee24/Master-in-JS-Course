'use strict'

/**
 * BOM => BROWSER OBJECT MODEL (es decir como puedo trabajar con los elementos que nos da el navegador web)
 */

function getBom() {
    console.log(window.innerHeight)
    console.log(window.innerWidth)
    console.log(window.location)
}
function redirect(url) {
    window.location.href = 'url'
}
function abrirVentana() {
    window.open(url, '','with= 400, heigth=300')
}
getBom()


