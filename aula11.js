// ** Funções Construtoras **

const data = { nome: "Afonso", idade: 30 };

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const pessoa1 = new Pessoa("Afonso", 21);

console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa1.idade + "\n");

// ** usando destruturação **

const { nome, idade } = pessoa1;

console.log("Usando destruturação: ");
console.log(nome);
console.log(idade);