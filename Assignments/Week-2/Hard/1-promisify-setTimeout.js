/*
    Write a function that returns a promise that resolves after n seconds have passed,
     where n is passed as an argument to the function.
*/
function mypromise() {
    var p = new Promise(function (resolve) {

        resolve(3000);
    });
    return p;

}

mypromise().then(wait);

function wait(n) {
    setTimeout(function() {
        console.log(`This is after ${n} seconds`);
    },n);
}
