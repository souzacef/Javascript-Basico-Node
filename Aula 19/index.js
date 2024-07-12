const prompt = require("prompt-sync")();

let notas = [];

function capturarNotas() {
    const numNotas = +prompt("Quantas notas deseja informar? ");

for (let i = 0; i < numNotas; i++) {
    notas.push(+prompt(`Digite a nota ${i + 1} `));
}

let media = 0;
notas.forEach((value) => {
    media += value;    
})

media = media / notas.length;
return media;
}

const media1 = capturarNotas();

if(media1 >= 6) {
    console.log("");
    console.log(`Aluno aprovado com média ${media1}`);
    console.log("Parabéns!");
    console.log("");
}else{
    console.log("");
    console.log(`Aluno não aprovado! Média: ${media1}`);
    console.log("Encaminhado a recuperação!");
    console.log("");

    notas =[];
    const media2 = capturarNotas();

    if(media2 >= 6) {
        console.log("");
        console.log(`Aluno aprovado com média ${media2}`);
        console.log("Parabéns!");
        console.log("");
    }else {
        console.log("");
        console.log(`Aluno não aprovado! Média: ${media2}`);        
        console.log("");
    }
    
}