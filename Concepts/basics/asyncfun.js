function myasyncfun() {
    let p = new Promise(function (resolve) {
        // do some async logic here
        resolve("Hi there");

    });
    return p;
}

async function main() {
    const value = myasyncfun();
    console.log(value);
}

main();
