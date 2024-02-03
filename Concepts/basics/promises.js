//----------------- Promises------------->  Pending, Resolve

var mypromise = new Promise(function (resolve) {
    // do some async logic here
    setTimeout(function () { console.log('this is set timeout') }, 2000);
    
    resolve("hi there");
});

mypromise.then(callback);

function callback() {
    console.log(mypromise);
}
// -------------------------------------Async Await  --------------------------
// function kiratsAsyncFunction() {
//     let p = new Promise(function (resolve) {
//         // do some async logic here
//         resolve("hi there!")
//     });
//     return p;
// }

// async function main() {
//     const value = await kiratsAsyncFunction();
//     console.log(value);
// }

// main();

