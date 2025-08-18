const entrada = require('prompt-sync')({sigint:false});
let par=0;
let impar=0;
let num;

do{
    num = Number (entrada ('Digite números: '));
    if (num !== 0){ //isso impede que o número 0 seja contado
        if (num % 2 == 0){
            par++
        }else{
            impar++
        }
    }
}while  (num !== 0)

console.log (`A quantidade de pares foi: ${par}`);
console.log (`A quantidade de impares foi: ${impar}`);