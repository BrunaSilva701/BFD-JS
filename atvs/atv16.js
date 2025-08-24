// Nomes em ordem alfabetica

const entrada = require('prompt-sync')({ sigint: false });

let nomes = [];

for (let i = 0; i < 3; i++) {
    let nome = entrada(`Digite o ${i + 1}º nome: `);
    nomes.push(nome);
}

nomes.sort(); // ordena em ordem alfabética

for (let nome of nomes) {
    console.log(`Nomes em ordem alfabética: ${nome}`);
}
