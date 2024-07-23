const prompt = require("prompt-sync")();

const Vilao = require("../personagens/Vilao");

function lutar(heroi) {
    console.log("Preparados ou não, lá vem porrada. ");
    const vilao = new Vilao(200, 50);
    while (heroi.vida > 0 && vilao.vida > 0) {
        vilao.defender(heroi.atacar());
        heroi.defender(vilao.atacar());
        console.log(`Vida do ${heroi.nome}: ${heroi.vida} `);
        console.log(`Vida do Troll: ${vilao.vida} `);
        console.log();
    }
    if (vilao.vida < 1) {
        console.log("Heroi venceu!");
        return true;
    } else {
        console.log("Vilão venceu!");
        return false;
    }
    
}

module.exports = (heroi) => {
    let luta = false;
    console.log(`Algumas horas depois, andando em meio a uma floresta, ${heroi.nome} percebeu que não estava sozinho ali. `);
    console.log(`Um pouco mais a frente existia uma figura grande em meio às arvores. `);
    console.log();
    console.log(`Um troll enorme pulou na frente de ${heroi.nome} e o assustou. `);

    if (prompt("Aparentemente ele quer briga. Deseja lutar? S - sim ou N - não. ").toUpperCase() == "S") {
        console.log("Se prepare. Aí vem o primeiro golpe. ");
       luta = lutar(heroi);
    } else {
        console.log(`Está na hora de meter o pé, ${heroi.nome} tenta se esconder em meio ao mato próximo e fugir da luta.`);
        console.log("O troll escuta muito bem e o achou. não tem mais saida. ");
        luta = lutar(heroi);
    }

    if (luta) {
        heroi.restaurar();
        heroi.depositar(50);
        console.log(`Parabéns, ${heroi.nome}! Você conseguiu vencer o Troll da Floresta. Receba seus premios. `);
        heroi.status();
        return true;
    } else {        
        return false;
    }
        
}