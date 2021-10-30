
const full = 65.60

function calcular(){
    let valorInput = document.querySelector('.valueDiaria').value;
    let result = valorInput / full;

    let mostrarResult = document.querySelector('.resultDiaria');

    if(result === 0 || result < 0){
        mostrarResult.innerHTML = `Você digitou um valor igual a 0`
    }
    else{
        mostrarResult.innerHTML = `Foram ${result.toFixed(1)} dias trabalhado`
    }
    if(result === 1.0){
        mostrarResult.innerHTML = `Foi ${result.toFixed(1)} dia trabalhado`
    }
}