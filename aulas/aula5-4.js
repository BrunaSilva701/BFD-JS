//Loop com condição de parada

const entrada = require ('prompt-sync')({sigint:false});

let num;

while (num ==0){
    num =  entrada ('Digite o número 0: ')
    num = Number(num)
} if (num != 0){
    console.log('Número incorreto')
    num = num+1
}