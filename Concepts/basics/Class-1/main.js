// console.log("hello world");

// let is modern vs var is premitive not used as such 
let a = 1;
a = 2;
// console.log(a);


// Data types- int, string, boolean, etc.
let f_name = "raju kumar";
let smart = true;
// console.log(f_name + smart);


// Array-------
const arr = [1, 3, 4, 5, 7, 9, 12, 18, 2, 14,77];
// Even number from array

// console.log("Even numbers: ");
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0) {
        // console.log(arr[i]);
    }
}


// Biggest number in array
let temp = arr[0];
for (let i = 0; i < arr.length; i++){
    if (arr[i] > temp) {
        temp = arr[i];
    }
}
// console.log("Largest number in an array is: "+ temp);

// Object-------
const user1 = {
    f_name: "Raju",
    gender: "male"
}
// console.log(user1.gender);


// Function--------
function sum(a, b) {
    
    return a + b;
}
// console.log(sum(3, 5));

// Question--------
function sum(num1, num2, funTocall) {
    let result = num1 + num2;
    return funTocall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}
 
// This is CALLBACKS - * never call the function sum(), just pass the name of the function sum as an argument.
// In javascipt the arguments can be a boolean,string,num, and a function.
const ans = sum(1, 4, displayResult);  
