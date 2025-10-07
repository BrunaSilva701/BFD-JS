//Calculo de multa

const entrada = require('prompt-sync') ({sigint:false});

let atraso= entrada('Quantos dias de atraso? ');
console.log('A multa é de: ' + (1.50*atraso));