const prompt = require("prompt-sync")();

module.exports = (heroi) => {
    console.log(`Após uma longa caminhada, depois de uma batalha ardua, ${heroi.nome} chegou a um pequeno vilarejo. `);
    console.log("Ao olhar a sua volta, percebeu uma pequena barraca onde um senhor o encarava. ");
    console.log(`${heroi.nome} foi em direção à barraca e perguntou ao senhor o que ele fazia ali. `);
    console.log();
    console.log("Vendo algumas poções de cura para viajantes, disse aquele senhor.");
    console.log(`Sua carteira tem: C$ ${heroi.moedas} `);
    console.log();
    if (prompt("Deseja comprar uma poção de força por 10 moedas ? S - sim ou N - não. ").toUpperCase() == "S") {
        if (heroi.moedas >= 10) {
            heroi.sacar(10);
            heroi.treinar(10);
            heroi.status();
        } else {
            console.log("O saldo de moedas não é suficiente para realizar a compra! ");            
        }
    } else {
        console.log(`Poção de força tem um gosto ruim. Não vou querer agora, disse ${heroi.nome}`);
        console.log("O senhor tem algo mais a oferecer?");
        console.log();
    }

    if (prompt("Deseja comprar uma poção de restauro da vida por 20 moedas ? S - sim ou N - não. ").toUpperCase() == "S") {
        if (heroi.moedas >= 20) {
            heroi.sacar(20);
            heroi.restaurarVida(10);
            heroi.status();
        } else {
            console.log("O saldo de moedas não é suficiente para realizar a compra! ");            
        }
    } else {
        console.log(`Acho que tenho vida suficiente para seguir meu caminho. Muito obrigado, disse ${heroi.nome}. `);
        console.log();
    }

    console.log(`${heroi.nome} acenou para o senhor e foi embora, entrou novamente na trilha e a seguiu. `);
    console.log();
    console.log(`Alguns minutos depois, ${heroi.nome} se deparou com o caminho bifurcado. `);
    console.log(`Seria melhor ir pela direita ou esquerda, pensou ${heroi.nome}. `);

    if (prompt("Ir pela direita ou esquerda? D - Direita ou E - Esquerda ").toUpperCase() == "D") {
        console.log(`Pouco depois, seguindo a trilha pela direita, ${heroi.nome} encontrou um portal brilhante e entrou...\n`);
        return true;
    } else {
        console.log(`${heroi.nome} seguiu a trilha pela esquerda e continuou por mais algumas horas. `);
        console.log();
        return false;
    }
}