var input = require("fs").readFileSync("/dev/stdin", "utf8"); // entrega Beecrowd

var x = parseFloat(input); // lendo como double 

var result = x*x*3.14159;

console.log(result.toFixed(4));