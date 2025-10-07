//Voto

const entrada = require('prompt-sync') ({sigint:false});

let idade= entrada(console.log('Digite sua idade'));
idade= Number(idade);

if (idade >=16){
    console.log('Você pode votar!!');
}else{
    console.log('Você não pode votar');
}