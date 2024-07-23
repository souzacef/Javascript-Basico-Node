const prompt = require("prompt-sync")();

const Vilao = require("../personagens/Vilao");

function luta(heroi) {
    const boss = new Vilao(100, 50);
    let rodada = 1;

    while(heroi.vida > 1 && boss.vida > 1) {
        console.log(`Rodada - ${rodada}`);
        console.log();
        const dadoVilao = d20();
        const dadoHeroi = d20();
        console.log(`Dado D20 de ${heroi.nome}: ${dadoHeroi} `);        
        console.log(`Dado D20 do Boss: ${dadoVilao} `);
        console.log();
        console.log(`Vida do ${heroi.nome}: ${heroi.vida} `);
        console.log(`Vida do Boss: ${boss.vida} `);
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

module.exports = (heroi) => {
    console.log(`Parece que nenhum segundo havia passado, mas ${heroi.nome} foi transportado para uma terra muito distante. `);
    console.log(`Olhando a sua volta, ${heroi.nome} percebe estar em uma arena. Algo muito parecido com o que ele lia em suas histórias em quadrinhos. `);
    console.log();
    console.log(`Ele não estava sozinho ali. Um pouco mais alto na arquibancada, milhares de pessoas gritavam e torciam para algo que ${heroi.nome} não sabia ainda. `);
    console.log(`Um enorme portão de ferro se abriu e algo tão grande quanto, saiu dele e veio em direção a ${heroi.nome}. `);
    console.log(`${heroi.nome}, GRITOOOOUUU o monstro. Agora você não me escapa! `);
    console.log("Espero por esse momento há anos, disse Boss ");
    console.log("Prepare-se! lá vem a luta.\n");
    if (luta(heroi)) {
        heroi.depositar(1000);
        heroi.restaurar();
        heroi.status();
        console.log("Jogo testo desenvolvido por - Carlos Souza ");
        console.log("Espero que tenham gostado dessa aventura. ");
    } else {
        console.log("\nGAME OVER\n");
    }
}