//Soma dos números pares entre 1 e 100

const entrada = require ('prompt-sync')({sigint:false});

let soma = 0;

for (let i = 2; i <=100; i += 2){
    if(i %2 ===0)
    soma += i
}

console.log('A soma é: ' + soma);