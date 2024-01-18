const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function hora(){
    let dataAtual = new Date();
    let hr = zeroesquerda(dataAtual.getHours(),2);
    let min = zeroesquerda(dataAtual.getMinutes(),2);
    let sec = zeroesquerda(dataAtual.getSeconds(),2);

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})

function zeroesquerda(num,zeros){
    return String(num).padStart(zeros,'0');
};