const entrada = require('prompt-sync')({sigint:false});

let nome = entrada ('Digite o nome do seu animal de estimação favorito: ');
console.log (`Seu animal de estimação favorito é um ${nome}: `);