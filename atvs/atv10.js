const entrada = require('prompt-sync')({ sigint: false });

let palavra = entrada('Digite uma palavra: ');

for (let i = 0; i < palavra.length; i++) {
  console.log(palavra[i]);
}

//palavra.length: Esta propriedade retorna o número de caracteres que a palavra tem. Por exemplo, se a palavra for "casa", palavra.length será 4.