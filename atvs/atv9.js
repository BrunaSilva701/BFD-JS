const entrada = require('prompt-sync')({sigint:false});

let num = Number (entrada ('Digite um valor: '))

for (let i=num; i >=1; i--){
    console.log(i)
}