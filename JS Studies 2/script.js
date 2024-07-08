/*
Orientação objetos


*/


/*
const carro = {
    marca:"ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-123",
    buzina: function(){
        alert("bip bip");
    },
    completo: function(){
        return "Marca é " + this.marca;
    }

};
*/


let carro = {};

function salvarCarro() {
    carro.marca = document.getElementById('marca').value;
    carro.modelo = document.getElementById('modelo').value;
    carro.ano = document.getElementById('ano').value;
    carro.cor = document.getElementById('cor').value;
    alert("Objeto carro salvo com sucesso!");
}

function imprimirCarro() {
    alert(`Carro:\nMarca: ${carro.marca}\nModelo: ${carro.modelo}\nAno: ${carro.ano}\nCor: ${carro.cor}`);
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'n' || event.key === 'N') {
        toggleMode();
    }
});

/*
EVENTOS:

@Dev_Tav
há 8 meses
PARA QUEM QUISER ANOTAR:
onclick => disparado quando recebe um click
ondblclick => disparado quando click duplo
onmouseover => disparado quando o mouse está sobre
onmouseout => disparado quando o mouse sai do objeto
onmousemove => disparado quando o mouse é movido no elemento
onmousedown => disparado quando o click do botão for pressionado
onmouseup = > disparado quando o click do mouse é solto
onfocus => disparado quando o elemento recebe o foco. Válido para input
onchange => disparado quando há uma mudança no conteúdo. "Ao mudar"
onblur => disparado quando o elemento perde o foco
onkeydown => disparado quando uma tecla é pressionada 
onkeypress => disparado quando uma tecla é pressionada e solta
onkeyup => disparado quando uma tecla é solta sobre o elemento
onload => disparado quando a página terminou de ser carregada. Body
onresize => disparado quando há um redimencionamento da janela


*/