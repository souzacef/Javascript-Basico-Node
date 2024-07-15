const Veiculo = require("./veiculo");

class Moto extends Veiculo{
    constructor(marca, modelo, ano, tipo, combustivel, numOcupantes, cilindrada) {
        super(marca, modelo, ano, tipo, combustivel, numOcupantes);
        this.cilindrada = cilindrada;        
    }

    acelerar() {
        console.log("+10km/h");
    }

    apresentacao() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cilindradas: ${this.cilindrada}`);
    }

}

module.exports = Moto;