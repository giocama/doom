const listaDinamica = document.querySelector('#listaDinamica');
const texto = document.querySelector('#input');
const boton = document.querySelector('#enviar');

boton.addEventListener('click', () => {
    Let = contenido = texto.value;
    Let = elementoLista = document.createElement('li'); 
    elementoLista.textContent=contenido; 
    listaDinamica.appendChild(elementoLista);
});