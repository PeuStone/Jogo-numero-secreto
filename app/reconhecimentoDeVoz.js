const elementosChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChute(chute);
    verificaValorValido(chute);
}

function exibeChute(chute) {
    elementosChute.innerHTML = `
    <div> Você disse </div>
    <span class ="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());