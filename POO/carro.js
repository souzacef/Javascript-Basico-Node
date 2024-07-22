const Veiculo = require("./Veiculo");

class Carro extends Veiculo{
    constructor(marca, modelo, ano, tipo, combustivel, numOcupantes, numPortas){    
        super(marca, modelo, ano, tipo, combustivel, numOcupantes)    
        this.numPortas = numPortas;
    }    

    // acelerar() {
    //     console.log("+5km/h");
    // }

}

module.exports = Carro;