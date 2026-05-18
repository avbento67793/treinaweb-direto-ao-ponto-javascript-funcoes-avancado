/* 
    Funções de ordem superior, ou
    Higher-Order Functions (HOFs)
*/

function dobro(x) {
    return x * 2;
}   

function triplo(x) {
    return x * 3;
}

function aplicar(funcao, valor) {
    return funcao(valor);
}

console.log(aplicar(dobro, 5)); // 10
console.log(aplicar(triplo, 5)); // 15