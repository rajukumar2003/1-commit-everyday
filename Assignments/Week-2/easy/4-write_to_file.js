// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
const readline = require('readline-sync');

let user_input = readline.question("Enter the string:\n");

fs.writeFile("b.txt", user_input, (err, data) => {
    console.log("Writtten successfully!!");
})


