var listaPessoas = [];

function criaPessoa(nome, idade, sexo){
    let pessoa = new Object();

    pessoa["nome"] = nome;
    pessoa["idade"] = idade;
    pessoa["sexo"] = sexo;

    listaPessoas.push(pessoa);
}

criaPessoa("Carlos",38,"M");
criaPessoa("Eduardo",37,"N");
criaPessoa("Freire",36,"O");
criaPessoa("Souza",35,"P");

console.log(listaPessoas);