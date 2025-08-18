//1. Peça ao usuário para digitar números.
//2. Quando a soma dos números digitados for maior que 100, o programa deve parar e mostrar a soma final.

const entrada = require ('prompt-sync')({sigint:false});
let soma = 0;
let num;

do{
    num = Number (entrada ('Digite um valor: '));
        soma += num
}while (soma < 100)

console.log (`A soma é: ${soma}`);