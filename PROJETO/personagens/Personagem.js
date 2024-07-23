class Personagem {
    constructor(vida){
        this.vida = vida;
    }
    
    atacar (){
        console.log("Ataque");    
    }

    defender() {
        console.log("Defender");
    }
}

module.exports = Personagem;