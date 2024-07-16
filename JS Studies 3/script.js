/*
    -- Array  --
*/

/*
objeto é com chaves {}
const pessoa = {
    nome:"dimitri",
    sobrenome:"texera",
    idade:30
};

*/


const lista = ["ara", "ere", "iri"];
const lista2 = ["jooj", "jaaj", "jiij"];
console.log(lista);  // ["ara", "ere", "iri"]
lista.pop();  // Chame o método pop com parênteses
lista.push("Keke"); // adiciona ao final 
lista.shift() // remove o primeiro
console.log(lista);  // ["ara", "ere"]
const listaNova = lista + lista2;
console.log(listaNova);  // ["ara", "ere"]

function ordena(a, b) {
    if(a.nome == b.nome){
        return a.idade - b.idade;
    }
    return a.nome - b.nome;
    
}

const pessoas = [
    {nome: "Abreu", idade: 18},
    {nome: "Zacarias", idade: 1}
];

pessoas.sort(ordena);

console.log("Ordenado:");

for (let index = 0; index < pessoas.length; index++) {
    console.log(pessoas[index].nome + '-' + pessoas[index].idade);
}
//console.log("Ordem inversa: " + pessoas);


document.getElementById("valor").innerHTML = lista.join(" . ");