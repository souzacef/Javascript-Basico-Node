function contar(valor) {
    let temp = 0;
    for (let i = 0; i < valor; i++) {
        temp += i;        
    }
    return temp;
}

async function teste() {
    let resposta =  await contar(11111111);
    console.log("Não demorei nada.");
    console.log(resposta);
}

teste();