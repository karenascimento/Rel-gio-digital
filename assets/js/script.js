const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if(hors < 10) hr = '0' + hr;

    if(minuts < 10) min = '0' + min;
    
    if(segunds < 10) seg = '0' + seg;
    
    horas.textContent = hors;
    minutos.textContent = minuts;
    segundos.textContent = segunds;
})
