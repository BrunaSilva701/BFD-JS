// Encontando o maior número

const entrada = require('prompt-sync')({sigint:false});

let valores = [];

for (let i = 0; i<3; i++){
    let num = Number(entrada(`Digite o ${i+1}° número: `));
    valores.push(num); // adiciona os numeros ao array
}

let maior = valores[0] //variavel para receber o maior valor

for (let i = 0; i<valores.length; i++){  //Percorre o array para achar o maior valor
    if(valores[i] > maior){  //verificar se o novo valor é maior que o atual
        maior = valores[i];  //se for, novo valor é atualizado como maior
    }
}

console.log(`O maior número digitado foi: ${maior}`)

//.length é uma propriedade dos arrays (e de algumas outras coisas) que informa quantos elementos tem dentro do array.