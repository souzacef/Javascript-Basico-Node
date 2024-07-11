var nome = "Carlos";
var idade = 38;
var sexo = "M";
var altura = 1.72;
var peso = 73.2;

var nomes = ["Carlos", "Eduardo", "Freire", "De", "Souza"];

console.log(nomes);

console.log(nomes.indexOf("Eduardo"));

console.log(nomes.pop());

console.log(nomes);

// console.log(nomes.splice(1,1));

// console.log(nomes);

nomes.forEach((value, index) => {

    console.log(index  + " " + value);
})

console.log(nomes.length);

console.log(nomes.filter((value) => value.length < 6));