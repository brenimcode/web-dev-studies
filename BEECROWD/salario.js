var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');


var a = parseInt(lines[0]); // lendo como inteiro
var b = parseInt(lines[1]); // lendo como inteiro
var salary = parseFloat(lines[2]); // lendo double

salary *= b;

console.log("NUMBER = " + a);
console.log("SALARY = U$ " + salary.toFixed(2));