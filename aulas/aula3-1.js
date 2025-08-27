//aula3-1
const entrada = require ('prompt-sync')({sigint:false});

let senha;
do {
    senha = entrada ("Digite a senha: ");
} while (senha !== "1234");
console.log("Senha correta! Acesso liberado.");