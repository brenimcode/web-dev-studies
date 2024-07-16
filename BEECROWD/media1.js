var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split('\n');

var a = parseFloat(lines[0]) * 3.50000; // lendo como inteiro
var b = parseFloat(lines[1]) * 7.50000; // lendo como inteiro

var result = (a+b)/11.00000;

console.log("MEDIA = " + result.toFixed(5));

