//Celcius para Fahrenheit

const entrada = require ('prompt-sync')({sigint:false});

function celciusParaFahrenheit(temperatura){
    return (temperatura*9/5)+32
}

let c = Number(entrada('Digite a temperatura em Celcius: '));
let resultado = celciusParaFahrenheit(c);
console.log(`A conversão de Celcius para Fahrenheit é: ${resultado} `);