// ** Funções Recursivas e Call Stack **

let i = 0;

function main() {
    console.log("Executando função recursiva, i = " + ++i);

    if (i == 1000) return;
    
    main();
}

main(); 