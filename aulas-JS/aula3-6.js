const entrada = require('prompt-sync') ({sigint:false});

let idade = entrada('Qual a sua idade? ');
idade = Number(idade);
console.log('Ano que vem você terá: ' + (idade + 1));