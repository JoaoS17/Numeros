function descobrirNumeroSecreto() {

    const numeroSecreto = prompt("Digite o número secreto:");

    let tentativa;
    let tentativas = 0;

    do {
        tentativa = prompt("Adivinhe o número secreto:");

        tentativas++;

        if (tentativa < numeroSecreto) {
            console.log("O número secreto é maior. Tente novamente.");
        } else if (tentativa > numeroSecreto) {
            console.log("O número secreto é menor. Tente novamente.");
        } else {
            console.log(`Parabéns! Você acertou o número secreto em ${tentativas} tentativas.`);
        }

    } while (tentativa != numeroSecreto);
}
descobrirNumeroSecreto();  