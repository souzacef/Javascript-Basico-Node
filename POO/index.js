const Carro = require("./carro");
const Moto = require("./moto")

const carro = new Carro("vw", "Fusca", 1993, "Compacto", "Gasolina", 5, 2);

const moto = new Moto("BMW", "GS1200", 2010, "Rally", "Gasolina", 2, 1200);


carro.validar();
carro.padronizar();
console.log(carro);
carro.acelerar(10);
console.log(carro);
carro.desacelerar(7);
console.log(carro);

console.log(moto);
moto.acelerar(25);
console.log(moto);
moto.desacelerar(7);
console.log(moto);
