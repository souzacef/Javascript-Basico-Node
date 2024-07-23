const Personagem = require("./Personagem");


class Heroi extends Personagem{
    constructor(vida, nome, fome, forca, moedas) {
        moedas = 0;
        
        super(vida);
        this.nome = nome;
        this.fome = fome;
        this.forca = forca;
        this.moedas = moedas;        
    }

    status() {
        console.log();
        console.log(`Nome: ${this.nome}`);
        console.log(`Vida: ${this.vida}%`);
        console.log(`Fome: ${this.fome}%`);
        console.log(`Força: ${this.forca}%`);
        console.log(`Moedas: C$ ${this.moedas}`);
        console.log();
    }

    alimentar(fome, vida) {
        this.fome += fome;
        this.vida += vida;
    }

    treinar(treino) {
        this.forca += treino;
    }

    depositar(moedas) {
        this.moedas += moedas;
    }

    sacar (moedas) {
        this.moedas -= moedas;
    }

    restaurar() {
        this.vida = 100;
        this.fome = 100;
        this.forca = 100;
    }

    restaurarVida() {
        this.vida += this.vida;        
    }

    atacar() {
        return Math.floor(Math.random() * (this.vida + this.forca));
    }

    defender(golpe) {    
      this.vida -= golpe;
      this.golpe -= golpe;
    }	
}

module.exports = Heroi;