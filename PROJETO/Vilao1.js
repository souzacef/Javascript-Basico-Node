const Personagem = require("./personagem");

class Vilao1 extends Personagem{

    constructor(vida, forcaAtaqueEsp){
        super(vida);
        this.forcaAtaqueEsp = forcaAtaqueEsp;
    }

    ataqueEsp() {
        console.log(this.forcaAtaqueEsp);
    }
}

module.exports = Vilao1;