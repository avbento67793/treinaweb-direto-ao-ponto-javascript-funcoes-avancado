// ** Retornando um valor simples **
function soma(a, b) {
    return a + b;
}

const resultado = soma(10, 20);

console.log(resultado); 

// ** Retornando um array **
function criarArray(nome, idade) {
    return [nome, idade];
}

const meuArray = criarArray("Anastasia", 21);

console.log(meuArray);


// ** Retornando um objeto **
function criarObjeto(nome, material) {
    return {
        nome: nome,
        material: material
    }
}

const {nome, material} = criarObjeto("Garfo", "Aço");

console.log(nome, material);


// ** Retornando uma função **
function criarMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    }
}

const multiplicarPor2 = criarMultiplicador(2);

console.log(multiplicarPor2(5));