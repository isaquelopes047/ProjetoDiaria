let diariaFull = 65.60;
const newLocal = {
    diaria1: diariaFull,
    diaria2: diariaFull * 2,
    diaria3: diariaFull * 3,
    diaria4: diariaFull * 4,
    diaria5: diariaFull * 5,
    diaria6: diariaFull * 6,
    diaria7: diariaFull * 7,
    diaria8: diariaFull * 8,
    diaria9: diariaFull * 9,
    diaria10: diariaFull * 10,
};
const todasAsDiarias = newLocal;

newFunction = () => {
    const obj1 = document.querySelector('.infoDiaria1');
    obj1.innerHTML = `| 1 Diaria - ${todasAsDiarias.diaria1.toFixed(2)}`;
    const obj2 = document.querySelector('.infoDiaria2');
    obj2.innerHTML = `| 2 Diarias - ${todasAsDiarias.diaria2.toFixed(2)}`;
    const obj3 = document.querySelector('.infoDiaria3');
    obj3.innerHTML = `| 3 Diarias - ${todasAsDiarias.diaria3.toFixed(2)}`;
    const obj4 = document.querySelector('.infoDiaria4');
    obj4.innerHTML = `| 4 Diarias - ${todasAsDiarias.diaria4.toFixed(2)}`;
    const obj5 = document.querySelector('.infoDiaria5');
    obj5.innerHTML = `| 5 Diarias - ${todasAsDiarias.diaria5.toFixed(2)}`;
    const obj6 = document.querySelector('.infoDiaria6');
    obj6.innerHTML = `| 6 Diarias - ${todasAsDiarias.diaria6.toFixed(2)}`;
    const obj7 = document.querySelector('.infoDiaria7');
    obj7.innerHTML = `| 7 Diarias - ${todasAsDiarias.diaria7.toFixed(2)}`;
    const obj8 = document.querySelector('.infoDiaria8');
    obj8.innerHTML = `| 8 Diarias - ${todasAsDiarias.diaria8.toFixed(2)}`;
    const obj9 = document.querySelector('.infoDiaria9');
    obj9.innerHTML = `| 9 Diarias - ${todasAsDiarias.diaria9.toFixed(2)}`;
    const obj10 = document.querySelector('.infoDiaria10');
    obj10.innerHTML = `| 10 Diarias - ${todasAsDiarias.diaria10.toFixed(2)}`;
}
newFunction();