/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
    const p1 = new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        },1000);
    });
    return p1;
}

function waitTwoSecond() {
    const p2 = new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, 2000);
    });
    return p2;
}

function waitThreeSecond() {
    const p3 = new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, 3000);
    });
    return p3;
}

function calculateTime() {
    const start_time = Date.now();

    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
        .then(() => {
            const end_time = Date.now();
            const total_time = end_time - start_time;
            console.log(`All promises resolved in ${total_time} milliseconds`);
        });
}
calculateTime();
