var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');


var b = parseFloat(lines[1]); // lendo como inteiro
var salary = parseFloat(lines[2]); // lendo double

var ans = b + salary*0.15;
console.log("NUMBER = R$ " + ans.toFixed(2));