const prompt = require("prompt-sync")();

function randomico() {
    const num = Math.floor(Math.random() * 100);
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = (heroi) => {
    console.log(`A floresta neste ponto ficou menos fechada. Logo a frente, ${heroi.nome} avistou um grande espaço aberto.`);
    console.log(`Uma enorme clareira em meio a mata. Algumas frutas, pedras e arbustos baixos compunham a paisagem. `);

    if (prompt("Deseja coletar e comer algumas dessas frutas ? S - sim ou N - não. ").toUpperCase() == "S") {
        heroi.alimentar(20, 20);
        heroi.status();
        console.log();
        console.log(`Frutas deliciosas, disse ${heroi.nome}. Comeria mais um pouco. `);
    } else {
        console.log();
        console.log(`Hmmm, já estou cheio, disse ${heroi.nome}. Não quero mais frutas. `);
    }
    console.log();
    console.log(`Algo chamou a atenção do ${heroi.nome}. Em meio às pedras, alguma coisa se destacava. `);
    console.log(`${heroi.nome} se aproximou e percebeu ser uma bolsa um pouco diferente. `);

    if (prompt("Deseja abrir a bolsa e verificar seu conteúdo ? S - sim ou N - não. ").toUpperCase() == "S") {
        if (randomico()) {
           heroi.restaurarVida(50);
           heroi.depositar(50);
           console.log();
           console.log("\nObaaaaa! Achei uma poção e 50 moedas. Hoje é meu dia de sorte.\n");

        }else {
            heroi.defender(50);
            console.log();
            console.log("\nAIIIIII, Essa doeu! Não imaginaria que houvesse uma cobra dentro da bolsa.\n");
        }
    }

    console.log();
    console.log("Logo após, um brilho surge no centro da clareira. Um portal se abre... ");
    console.log(`${heroi.nome}, se aproxima e entra no portal, levando-o para outra dimensão. `);
    console.log();
}