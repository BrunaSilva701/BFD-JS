//Calculo da média

const entrada = require('prompt-sync') ({sigint:false});

let n1 = entrada('Digite a primeira nota: ');
let n2 = entrada('Digite a segunda nota: ');
let n3 = entrada('Digite a terceira nota: ');

n1 = Number (n1);
n2 = Number (n2);
n3 = Number (n3);

let media = (n1 + n2 + n3)/3;

console.log('A média é: ' + media);