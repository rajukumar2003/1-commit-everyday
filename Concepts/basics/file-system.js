// fs(file system) - it is a module which provides read & write operations
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (eff, data) {
    console.log(data);
})

// This run 1st
console.log("Hello world");

