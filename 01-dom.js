/* document.write("Hola Mundo desde JS"); */

/* const title = document.getElementsByTagName('h1');
title[0] .innerHTML = 'Titulo cambiado desde JS';

const texto = document.getElementById('text');
texto.innerHTML = "Este texto esta escrito desde JS";
texto.style.background = 'blue';
texto.style.color = 'white';

console.log(texto; */

//Obtiene un elemento por ID
document.getElementById

//Obtiene todos los elementos de una clase y devuelve un arreglo
document.getElementsByClassName

//Obtiene todos los elementos por nombre y devuelve un areglo
document.getElementsByName

const texto = document.querySelector('#texto');
texto.textContent = 'Estoy escribiendo dede JS';

//Crear elementos html
const div = document.createElement('div');
const body = document.querySelector('body');

body.append(div);