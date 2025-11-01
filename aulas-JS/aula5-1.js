// Números de 1 a N

const entrada = require ('prompt-sync')({sigint:false});

let n = entrada ('Digite um número: ')
let num = 1;
while (num <= n) {
    console.log('Os números são: ', num);
    num++
}