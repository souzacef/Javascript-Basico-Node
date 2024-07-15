class Veiculo {
    constructor(marca, modelo, ano, tipo, combustivel, numOcupantes){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.tipo = tipo;
        this.combustivel = combustivel;
        this.numOcupantes = numOcupantes;
    }

    apresentacao() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}

module.exports = Veiculo;