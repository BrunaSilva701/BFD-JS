// numeros pares e impares

const entrada = require('prompt-sync') ({sigint:false});

let num = entrada('Digite um número: ');

if (num % 2 === 0){
    console.log('O número é par')
}else{
    console.log('O número é impar')
}