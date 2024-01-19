// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// After the program runs, the output should be
// hello world my name is raman


const fs = require('fs');
let count = 1;
result = ''
fs.readFile("b.txt", "utf-8", (err, data) => {
    data = data.toLowerCase();
    for (let i = 0; i < data.length; i++) {
        if (data[i] == " ") {
            result += data[i];
            while (data[i] == " ") {
                i++;
            }
            i--;
        }
        else if (data[i] != " ") {
            result += data[i];
        }
    }
    
    fs.writeFile("updated_b.txt", result, (err,data) => {
        console.log("Spaces removed succesfully !!");
    })

});

