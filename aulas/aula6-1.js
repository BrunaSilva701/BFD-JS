// Guardando números e calculando a média

const entrada = require('prompt-sync')({sigint:false});

let valores = [];
let soma = 0;

for (let i = 0; i<4; i++){
    let num = Number(entrada(`Digite o ${i + 1}º valor: `))
    valores.push(num);
    soma += num;
}

let media = soma / 4;
console.log(`A média dos valores é: ${media}`)