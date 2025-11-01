const entrada = require('prompt-sync') ({sigint:false}); //interrompe uma linha (true: interrompe o código todo)

let nome = entrada ('Digite seu nome: ');
console.log(nome);