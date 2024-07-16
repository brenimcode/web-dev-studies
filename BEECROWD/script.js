
var input = require("fs").readFileSync("stdin", "utf8");
var linhas = input.split(" "); // cria um vetor com a entrada, separada por espaços
var [x, y] = input.split(" ").map(item => parseInt(item));

console.log(linhas);
console.log(x+1);