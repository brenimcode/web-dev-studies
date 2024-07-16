var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');
var spaces1 = lines[0].split(' ');
var spaces2 = lines[1].split(' ');


var a= parseFloat(spaces1[1]) * parseFloat(spaces1[2]);
var b= parseFloat(spaces2[1]) * parseFloat(spaces2[2]);

var ans = a+b;

console.log("VALOR A PAGAR: R$ " + ans.toFixed(2));