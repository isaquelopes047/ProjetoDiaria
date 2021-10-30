
let diariaFull = 65.60

const todasAsDiarias = {
    diariaUm: diariaFull,
};

let textoUm = JSON.stringify(diariaFull);
let textoDois = JSON.stringify(diariaFull * 2);

const mostrar = document.querySelector('.infoDiariaList');
mostrar.innerHTML = textoDois;


const lista = document.querySelector('.infoDiariaList');
function lista() {
    // cria um novo elemento div
    // e dá à ele conteúdo
    var divNova = document.createElement("div");
    var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
    divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

    // adiciona o novo elemento criado e seu conteúdo ao DOM
    var divAtual = document.getElementById("div1");
    document.body.insertBefore(divNova, divAtual);
}


