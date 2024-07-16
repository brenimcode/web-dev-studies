var input = require("fs").readFileSync("stdin", "utf8");
/* Code: */
var lines = input.split('\n');

var a = parseInt(lines[0]); // lendo como inteiro
var b = parseInt(lines[1]); // lendo como inteiro

var result = a+b;

console.log("SOMA = " +result);