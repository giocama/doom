let edad = document.querySelector('#input');
let mensaje = document.querySelector('#mensaje');

let accion = () => {
    let valorEdad = edad.value;
    mensaje.innerHTML = (valorEdad >= 18) ? 'Puedes Votar' : 'No puedes Votar'
}