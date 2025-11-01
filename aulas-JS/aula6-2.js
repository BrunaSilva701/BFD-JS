// Mostrando elementos em ordem inversa

const entrada = require('prompt-sync')({sigint:false});

let nomes = [];

for (let i = 0; i<3; i++){
    let nome = entrada(`Digite o ${i+1}° nome: `);
    nomes.push(nome); // adiciona os nomes ao array
}

nomes.reverse(); //inverte a ordem dos nomes

for (let nome of nomes){
    console.log(`Os nomes na ordem inversa: ${nome}`)
}