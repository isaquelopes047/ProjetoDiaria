function difDias(){
    //instantaneos do objeto Date, veja explicação no final da resposta
    var dataUm = new Date(document.getElementById("dataUm").value);
    var dataDois = new Date(document.getElementById("dataDois").value);
    return parseInt((dataUm - dataDois) / (24 * 3600 * 1000));
}

function chamar(){
    document.getElementById("numeroDias").value = isNaN(difDias()) ? "Selecione a outra data" : difDias();  
}