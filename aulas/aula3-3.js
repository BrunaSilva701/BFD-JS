//Tabuada de um número

const entrada = require ('prompt-sync')({sigint:false});

let num = entrada ('Digite um número: ');
for (let i =1; i <= 10; i++){
    let resultado = num * i
    console.log('A tabuada é: ' + resultado);
}