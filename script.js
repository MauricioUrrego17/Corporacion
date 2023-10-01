let hideTextBtn = document.getElementById('hideTextBtn');
let hideText = document.getElementById('hideText');

hideTextBtn.addEventListener('click', toggleText);

function toggleText(){
    hideText.classList.toggle('show')

    if(hideText.classList.contains('show')){
        hideTextBtn.innerHTML = 'Ver Menos';
    }else {
        hideTextBtn.innerHTML = 'Ver Mas';
    }

}

const app = document.getElementById('typewriter')
const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
    .typeString('Ciudad de la Eterna Primavera')
    .pauseFor(200)
    .start();