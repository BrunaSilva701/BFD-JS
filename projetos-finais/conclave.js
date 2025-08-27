//Projeto Final I - MOD1

const entrada = require('prompt-sync')({sigint:false});

//atribuição das variáveis
let nome;
let id;
let escolha;

//Solicitação de nome e atribuição de identificação (1 a 5)
if (id =0, id<=5, id++){
    nome = entrada('Digite seu nome: ')
    id++
    console.log(`${nome} e ${id}`);
}

while(true){
    if(id<=5){
        console.log(`Òs cardeais que podem ser votados são: ${nome} e ${id}`)
    }

    escolha = entrada('Vote em um cardeal de acordo com seu id [1, 2, 3, 4, ou 5]: ')

    if(escolha < 0.6){
        
    }
}





// Vetores
// laço de repetição
// contador
// acumulador
// estrutura de decisão
// estrada e saida de dados
// menubarlogica condicional (2/3 votos = 0,6 ou 60%)