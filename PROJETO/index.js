const prompt = require("prompt-sync")();
const Heroi =  require("./personagens/Heroi");


const fase1 = require("./fases/fase1");


//APRESENTAÇÃO DO JOGO
console.log("==========MAKE YOUR WAY - TEXT GAME==========");
console.log();
console.log("Bem vindo, jogador! Esse é o mais novo Jogo de Ação por texto.");
console.log("Precisamos contruir seu personagem no qual irá se aventurar por nossos mundos.");
console.log();
console.log("Há muitos anos, em uma vila distante, vivia nosso heroi.");
console.log("Em busca de aventura, nosso heroi sai caminhando meio sem rumo em direção ao Vale das Sombras. ");
console.log();

//CRIAÇÃO DO PERSONAGEM(HERÓI)
const nome = prompt("Diga o melhor nome que venha à sua cabeça. ");

const heroi = new Heroi(80 , nome, 80, 50);

console.log(`Seu personagem foi criado. Agora, sempre chamaremos ele de ${heroi.nome}`);
console.log();
heroi.status();
console.log();

//ENSINA A SE ALIMENTAR
console.log(`Aparentemente, o ${heroi.nome} está caminhando há dias e parece um pouco cansado.`);

console.log();

if (prompt("Deseja comer uma fruta? S - sim ou N - não. ").toUpperCase() == "S") {
    console.log(`hmmm que fruta deliciosa, disse ${heroi.nome}, vou querer mais algumas `);
    heroi.alimentar(5,2);
    heroi.status();
} else if(prompt("Então deseja comer carne de caça? S - sim ou N - não. ").toUpperCase() == "S"){
    console.log(`hmmm, essa carne ótima, disse ${heroi.nome} `);
    heroi.alimentar(10,5);
    heroi.status();
} else {
    console.log("SEU PERSONAGEM NÃO RESTAUROU FOME OU VIDA! ");
}

console.log();
//ENSINA A MELHORAR O CONDICIONAMENTO FÍSICO(FORCA) 
console.log(`Ao longe ${heroi.nome} avistou um grande lago e foi se aproximando `);
console.log(`Dentro do lago existe alguma coisa brilhando. `);
console.log();
if (prompt("Deseja nadar até o ponto brilhante? S - sim ou N - não. ")) {
    heroi.treinar(10);
    
    console.log(`Era mais interessante de longe. Ao pegar o objeto brilhante ${heroi.nome} percebeu que se tratava de um anel de latinha de refrigerante.`);
    console.log(`Logo após, ${heroi.nome} retornou à margem do lago, se secou e seguiu seu caminho. `);
    heroi.status();
} else {
    console.log(`Ufaaa, disse ${heroi.nome}, a água estava bastante fria. `);
}

console.log();
console.log("Algum tempo se passou, e no meio do caminho havia uma arvore bem alta. ");
console.log("No topo dessa árvore existia uma sacola amarrada. ");

if (prompt("Deseja subir na árvore para pegar a sacola? S - sim ou N - não. ")) {
    console.log("Puxa, mas que sorte! Dentro da sacola haviam 5 moedas escondidas. ");
    heroi.depositar(5);
    heroi.treinar(15);
    heroi.status();
} else {
    console.log("Nossa, que preguiça! Não vou subir essa árvore. Deixa pra próxima. ");
    console.log("SEM ATIVIDADE FÍSICA, SEU PERSONAGEM PERDE PONTOS DE FORÇA!");
}

// FIM DA FASE INTRODUTÓRIA
console.log();
const fase1 = fase1(heroi);

if (fase1) {
    //fase 2
} else {
    console.log("GAME OVER");
}