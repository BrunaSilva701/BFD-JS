//Calculadora simples

const entrada = require ('prompt-sync')({sigint:false});

function soma(num1, num2){
    return num1 + num2;
}

let num1 = Number(entrada('Digite o primeiro valor: '));
let num2 = Number(entrada('Digite o segundo valor: '));
let resultado = soma(num1, num2)
console.log(`O resultado é: ${resultado}`)