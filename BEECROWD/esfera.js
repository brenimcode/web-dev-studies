var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(' ');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);



var ans = (a*c)/2.000;
console.log("TRIANGULO: " + ans.toFixed(3));
var ans = 3.14159*c*c;
console.log("CIRCULO: " + ans.toFixed(3));
var ans = (a+b)*c/2.000;
console.log("TRAPEZIO: " + ans.toFixed(3));
var ans = b*b
console.log("QUADRADO: " + ans.toFixed(3));
var ans = a*b;
console.log("RETANGULO: " + ans.toFixed(3));