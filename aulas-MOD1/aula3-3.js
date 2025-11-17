//Calculo do rateio

const entrada = require('prompt-sync') ({sigint:false});

let agua = entrada('Qual o valor da conta de água? ');
let energia = entrada('Qual o valor da conta de energia? ');
let apartamento = entrada('Qual a quantidade de apartamentos? ');

agua = Number(agua);
energia = Number(energia);
apartamento = Number(apartamento);

let rateio = (agua + energia)/apartamento

console.log(`Cada morador irá pagar: ${rateio}`);