let numero1 = document.querySelector('#Entrada1'); 
let numero2 = document.querySelector('#Entrada2');
let resultado = document.querySelector("#resultado");
let resultadop = document.querySelector('#resultado-p');

function somar(){
    let final = Number(numero1.value) + Number(numero2.value)
    resultadop.innerHTML = final;
    resultado.value = final;
}
   
 function subtrair(){
    let final = Number(numero1.value) - Number(numero2.value);
    resultadop.innerHTML = final;
    resultado.value = final;
}
function dividir(){
    let final = Number(numero1.value) / Number(numero2.value);
    resultadop.innerHTML = final;
    resultado.value = final;
}
function multiplicar(){
    let final = Number(numero1.value) * Number(numero2.value);
    resultadop.innerHTML = final;
    resultado.value = final;

}