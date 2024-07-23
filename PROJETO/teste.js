const prompt = require("prompt-sync")();

const Vilao = require("./personagens/Vilao");
const Heroi = require("./personagens/Heroi");
const heroi = new Heroi(80 , "Churros", 80, 50);



function luta(heroi) {
    const boss = new Vilao(300, 50);
    let rodada = 1;

    while(heroi.vida > 1 && boss.vida > 1) {
        console.log(`Rodada - ${rodada}`);
        console.log();
        const dadoVilao = d20();
        const dadoHeroi = d20();
        console.log(`Dado D20 de ${heroi.nome}: ${dadoHeroi} `);        
        console.log(`Dado D20 do Boss: ${dadoVilao} `);
        console.log();
        if (dadoHeroi >= dadoVilao) {
            boss.defender(heroi.atacar());
        } else {
            heroi.defender(boss.atacar());
        }
        prompt("Aperte ENTER para próxima rodada.\n");
        rodada++;
    }

    if (heroi.vida > 1) {
        return true;
    } else {
        return false;
    }
}

function d20() {
    let num = Math.floor(Math.random() * 21);
    if (num == 0) {
        num += 1;
    }
    return num;
}

luta(heroi);