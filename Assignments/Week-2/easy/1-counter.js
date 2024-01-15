// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let count = 0;

// const counter = setInterval(() => {             //or setInterval( function() { count++ } , 1000 );
//     count++;
//     console.log(count);
// }, 1000);

setInterval(function () {
    console.log(count);
    count++;
}, 1000);

