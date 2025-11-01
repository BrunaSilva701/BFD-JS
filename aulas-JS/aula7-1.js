const entrada = require ('prompt-sync')({sigint:false});

function saudar(nome){
    console.log('Olá,' + nome + '!');
}

let nomeUsuario = entrada('Digite seu nome: ');
saudar(nomeUsuario);