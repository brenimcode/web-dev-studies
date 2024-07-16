var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var a = parseFloat(lines[0]) * 2.0; // lendo como inteiro
var b = parseFloat(lines[1]) * 3.0; // lendo como inteiro
var c = parseFloat(lines[2]) * 5.0;

var result = (a+b+c)/10.00000;

console.log("MEDIA = " + result.toFixed(1));