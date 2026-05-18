// ** Funções Geradoras **

function* geradora() {
    yield "Valor 1";
    yield "Valor 2";
    yield "Valor 3";
}

const g = geradora();

while (true) {
    const res = g.next();

    if (res.done) break;

    console.log(res.value);
}