// ** Currying **

function multiplicador(a) {
    return function(b) {
        return a * b;
    }
}

const multiplicarPor3 = multiplicador(3);

console.log(multiplicador(5)(10));