// ** Strict Mode **
// O modo estrito é uma funcionalidade do JavaScript que permite que você execute seu código em um ambiente mais restrito, 
// o que pode ajudar a evitar erros comuns e melhorar a segurança do código. 
// Ele é ativado adicionando a string "use strict" no início de um arquivo ou de uma função.

const myFunc = () => {
    "use strict"
    let nome = "Afonso";

    console.log ("Olá, " + nome);
}

myFunc();

function calculador(x, y) {
    "use strict"
    console.log(x + y);
}

calculador(5, 10);