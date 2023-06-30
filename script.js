const h1 = document.querySelector('h1');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');


function btnOnClick(){
    const res = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = "Resultado: " + res;
    
}

btn.addEventListener('click',btnOnClick);