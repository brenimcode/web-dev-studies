var input = require("fs").readFileSync("stdin", "utf8");

var x = parseFloat(input); // lendo como double 

var result = x*x*3.14159;

console.log("A=" + result.toFixed(4));