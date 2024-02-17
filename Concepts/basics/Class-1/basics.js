// alert("hello");
// alert("world");

// var user_name = prompt("What is your name");
// alert("Welcome: "+user_name);

// var hello = 'Hello';
// var name = 'raju';
// alert(hello + ' ' + 'there' + ' ' + name);

// var message = prompt("Enter your message: ").slice(0,140);
// alert(message);

// var name = prompt("Enter your beloved name:").toLowerCase();
// var flc = name.slice(0,1).toUpperCase();
// rest_name = name.slice(1,name.length);
// alert("Hello " + flc+rest_name);

// Functions-----------------
// function greet(){
//     console.log("Hello");
//     console.log("India");
// }
// greet();

// Random Number-------------
// var p1 = prompt("Enter person 1's name: ");
// var p2 = prompt("Enter person 2's name: ");
// var n = Math.random()*100 + 1;
// n = Math.floor(n);

// IF ELSE ------------
// if (n > 70){
//     alert(p1 + " Your love is strong " + p2 + " " + n + " %" );
// }
// else{
//     alert(p1 + " Loves " + p2 + " " + n + " %");
// }

// Array-------------------
// var name_arr = ["raju", "vineet", "jack", "arjit", "heramb", "himanjal"];
// var user_input = prompt("Enter a name: ").toLowerCase();
// if (name_arr.includes(user_input)){
//     alert("Welcome!");
// }

// else {
//     alert("Better luck next time!!");
// }

var output = [];
var i = 1;
function fizzbuzz(){
    if(i%3==0 && i%5 == 0){
        output.push("Fizz Buzz");
    }
    else if (i % 3 == 0){
        output.push("Fizz");
    }
    else if(i % 5 == 0){
        output.push("Buzz");
    }
    else{
        output.push(i);
    }
    
    i++;
    console.log(output);
}
