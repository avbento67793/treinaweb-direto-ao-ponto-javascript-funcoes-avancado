// ** Callback Functions **

function main(callback) {
    setTimeout(callback, 2000);
}

main(() => {
    console.log("Callback executado");
});