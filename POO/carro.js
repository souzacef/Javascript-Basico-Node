class Carro {
    constructor(marca, modelo, ano, tipo, combustivel){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.tipo = tipo;
        this.combustivel = combustivel;
    }

    apresentacao() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}

module.exports = Carro;