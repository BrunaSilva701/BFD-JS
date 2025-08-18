const entrada = require('prompt-sync')({ sigint: false });

let frase = entrada('Digite uma frase: ');

let contadorVogais = 0;

for (let i = 0; i < frase.length; i++) {
  let caractere = frase[i];
  if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
    contadorVogais++;
  }
}

console.log(`A frase tem ${contadorVogais} vogais.`);

//let caractere = fraseMinuscula[i];: A cada rodada do loop, essa linha armazena o caractere atual em uma variável chamada caractere.