const entrada = require ('prompt-sync')({sigint:false});
let contador = 0 //variavel para contar os números digitados (0 pois vai contar desde o ínicio)
let numDigitado; //variavel para armazenar os números digitados

do{
    numDigitado = Number (entrada ('Digite um número (Digite 0 para parar):')) //pedir um número ao usuario e converter para número
    if (numDigitado !== 0){ //verificar se o numero é diferente de 0
        contador++  //incrementar no contador
    }else{
        console.log('Número 0 digitado. Programa finalizado!')
    }
}while(numDigitado !==0) //o loop continua por enquanto o número dogitado for diferente de 0

console.log(`Você digitou ${contador} números`); //números digitados sem contar o 0