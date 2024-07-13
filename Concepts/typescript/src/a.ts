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


// -----------------------------------------  Assigning Types to a function -------------------
// function runAfter1S(fn: ()=> void) {
//     setTimeout(fn , 1000);
// };
// runAfter1S(() => console.log('after 1 sec'));


// -----------------------------------------  Interfaces - assign a type to objects ---------------------

// interface User{
//     firstName: string,
//     age: number,
//     email?:string,    //Optinal Argument
// }
// function canVote(user:User) {
//     if (user.age >= 18) {
//         return "YES";
//     }
//     else {
//         return 'NO';
//     }
// };
// const answer = canVote({
//     firstName: 'rajuk',
//     age: 18,
// });
// console.log(answer);


// ----------------------------- Types -> Very similar to interfaces , types let you aggregate data together.
// type Data = {
//     firstName: string,
//     lastName: string,
//     age: number,
// }
// // Union in types-------
// type greetArg = string | number | boolean;
// function greet(msg: greetArg) {
//     console.log(msg);
// };
// greet('hello world');


// ----------------------------------------- Arrays in TS-------------------------------------------
// function maxValue(arr: number[]) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max;
// }
// console.log(maxValue([1, 2, 3]));

// ****  important  ****
// Interfaces can be implemented by a classes
// Types let u do unions and intersections


//    Generics -> enable you to create components that work with any data type while still providing compile-time type safety.
function firstEl<T>( arr : T[] ) {
    return arr[0];
};
const output1 = firstEl(['raju', 'k']);
const output2 = firstEl([1, 2, 3]);
console.log(output1.toUpperCase());
console.log(output2);
