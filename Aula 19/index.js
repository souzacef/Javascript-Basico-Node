const prompt = require("prompt-sync")();

let notas = [];

function capturaNotas() {
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

console.log(capturaNotas());