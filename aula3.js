/*
    funções auto executáveis, ou 
    IIFE (Immediately Invoked Function Expression)
*/

(async (nome) => {
    console.log("O meu nome é " + nome);

    const resultado = await Promise.resolve("Promise resolvida");
    console.log("Executou: " + resultado);
})("João");