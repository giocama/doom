const $btn = document.querySelector('#btn');

$btn.addEventListener('click', () => {
    console.log('Me presionaste');
});

const $inpText = document.querySelector('#text');

$inpText.addEventListener('keyup', (e) => {
    /* console.log('Escribiste algo'); */
    console.log(e.target.value);
});

