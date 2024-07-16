var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');


var a = parseInt(lines[0]); // lendo como inteiro
var b = parseInt(lines[1]); // lendo como inteiro
var c = parseInt(lines[2]);
var d = parseInt(lines[3]);

var result = (a*b) - (c*d);

console.log("DIFERENCA = " + result);