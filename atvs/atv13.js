const entrada = require ('prompt-sync')({sigint:false});
let soma = 0;
let num;

do{
    num = Number (entrada ('Digite um valor: '));
        soma += num
}while (soma < 100)

console.log (`A soma é: ${soma}`);