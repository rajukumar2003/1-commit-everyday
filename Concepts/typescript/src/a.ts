// const x: number = 1;
// console.log(x);

// Types in TS - number, string, any, boolean.
// const a: any = 5

// function greet(userName:string) {
//     console.log('Hello ' + userName)
// };
// greet('rajuk');

// Sum function -------
// function sum(a:number, b:number) {
//     return a + b;
// };
// console.log(sum(4, 5)); 


// Assigning Types to a function -------------------
function runAfter1S(fn: ()=> void) {
    setTimeout(fn , 1000);
};
runAfter1S(() => console.log('after 1 sec'));