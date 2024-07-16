

class Carro {
   constructor(valor1, valor2, valor3) {
    this.marca = valor1;
    this.modelo = valor2;
    this.ano = valor3;
   }
   // Metodos:
   buzina() {
    return "SDLKAJSDLKAJSDLKja";
   }
}


const uno = new Carro("Fiat","Uno", 2001);

// Converte em objeto JSON;.
let texto = JSON.stringify(uno);


document.getElementById('valor').innerHTML = texto;
