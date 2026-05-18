// ** Async, Await e Promises **

setTimeout(() => {
    console.log("setTimeout executado");
}, 2000);


console.log("Código síncrono executado");

 
async function main() {
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise resolvida");
        }, 2000);
    });
    console.log(data);
}

main();


// ** Promise de nível superior **
const data = await new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise resolvida");
    }, 2000);
});

console.log(data);