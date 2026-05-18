// ** Parâmetro Posicional **
function calculador(valorX, valorY) {
    console.log(`O resultado da soma é: ${valorX + valorY}`);
}

calculador(10, 20); 


// ** Parâmetros com valor default **
function calculador(valorX, valorY = 10) {
    console.log(`O resultado da soma é: ${valorX + valorY}`);
}

calculador(10); 


// ** Atribuição por desestruturação **
const data = {
    nome: 'João',
    idade: 30,
    cidade: 'Lisboa'
}

function printUser({nome, idade, cidade}) {
    console.log(`O meu nome é ${nome}, tem ${idade} anos e é de ${cidade}`);
}

printUser(data); 


function printUser2([nome, idade, cidade]) {
    console.log(`O meu nome é ${nome}, tem ${idade} anos e é do ${cidade}`);
}

printUser2(["Maria", 25, "Porto"]);


// ** Parâmetros por rest operator **
function printUser3(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        console.log(arguments[i]);
    }
}

printUser3(1, 2, 3, 4, 5, 6);
