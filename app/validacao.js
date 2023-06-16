function verificaValorValido(chute) {
    const numero = +chute;

    if (chuteInvalido(numero)) {
        if (chute.toUpperCase() === "DESISTO"){
            document.body.innerHTML =
            `
            <h2> GAME OVER </h2>
            <h3> Aperte o botão caso queira jogar novamente</h3>
            <button id="jogar-novamente" class ="btn-jogar">Jogar Novamente </button>
            `
            document.body.style.backgroundColor = "black";
        } else {

        elementosChute.innerHTML += '<div>Valor Invalido</div>';
        }
        return
    }

    if (comparacaoDeValoresPermitido(numero)) {
        elementosChute.innerHTML += `<div> Valor inválido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor} </div>`;
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2> Você acertou! </h2>
            <h3> O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class ="btn-jogar">Jogar Novamente </button>
        `
    } else if (numero > numeroSecreto) {
        elementosChute.innerHTML += `
        <div> O número secreto é menor <i class="fa-solid fa-arrow-down"></i> </div>
        `
    } else {
        elementosChute.innerHTML += `
        <div> O número secreto é maior <i class="fa-solid fa-arrow-up"></i> </div>
        `
    }
}

function comparacaoDeValoresPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
