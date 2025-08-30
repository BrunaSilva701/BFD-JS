//Projeto Final I

const entrada = require("prompt-sync")({ sigint: false });

let totalDeVotos = 5;
let cardeais = [];
let votos = []; //array vazio
let escolha;
let vencedor = 0;

console.log("---- Incrição dos Cardeais ---");
for (let i = 0; i < totalDeVotos; i++) {
  let nomeCardeal = entrada(`Digite o nome do ${i + 1}° Cardeal: `);
  cardeais.push({ id: i + 1, nome: nomeCardeal }); //guarda cardeais no array
  votos.push(0) //guarda votos no array
}

do{
    for(let i = 0; i < votos.length; i++){
        votos[i]=0;
    }

  console.log("\n--- Inicio da votação ---");
  console.log(`Os cardeais que podem ser votados são: `);
  for (let i = 0; i < cardeais.length; i++) { //Percorrer o array
    console.log(`ID: ${cardeais[i].id} - Nome: ${cardeais[i].nome}`);
  }

  for (let i = 0; i < totalDeVotos; i++) {
    escolha = entrada(`Digite o número do seu voto: `);
    escolha = Number(escolha)
    votos[escolha -1] = votos[escolha-1]+1; //Acessa o item correto no array votos e soma 1 ao número de votos daquele cardeal
  }

  for(let i =0; i < votos.length; i++){
    if(votos[i] >= 3){
     console.log("\nO vencedor foi " + cardeais[i].nome + " com " + votos[i] + " votos!");
     vencedor = 1;
    }
  }
    
    if(vencedor === 0){
    console.log("Quantidade de votos não foi atingida. A votação será reiniciada!");
    }
}while (vencedor === 0) 

// Utilizar:
// Vetores - array OK
// laço de repetição
// contador
// acumulador
// estrutura de decisão
// estrada e saida de dados
// menu
// logica condicional (2/3 votos = 0,6 ou 60%)
