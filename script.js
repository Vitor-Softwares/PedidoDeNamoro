function responderPedido(resposta) {
    if (resposta === 'sim') {
        // Lógica para exibir a resposta "sim"
        alert("Eu aceito! 💖");
    }
}

function moverBotao() {
    var botao = document.getElementById("botao-nao");
    var botaoWidth = botao.offsetWidth;
    var botaoHeight = botao.offsetHeight;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var maxPosX = windowWidth - botaoWidth;
    var maxPosY = windowHeight - botaoHeight;

    var newPosicaoX = Math.floor(Math.random() * maxPosX);
    var newPosicaoY = Math.floor(Math.random() * maxPosY);

    botao.style.position = "absolute";
    botao.style.left = newPosicaoX + "px";
    botao.style.top = newPosicaoY + "px";
}
