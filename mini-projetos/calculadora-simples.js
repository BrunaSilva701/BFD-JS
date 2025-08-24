//Mini-Projeto I

const entrada = require('prompt-sync')({sigint:false});

function calcular(n1,n2){
    return{
        soma: n1+n2,
        subtracao: n1-n2,
        multiplicacao: n1*n2,
        divisao: n1/n2,
    }
}

let tipo = entrada ('Qual operação ddeseja realizar? (1: soma, 2: subtração, 3: multiplicação ou 4: divisão');
let n1 = Number(entrada('Digite o primeiro valor: '));
let n2 = Number(entrada('Digite o segundo valor: '));
let resultado = calcular(n1,n2)

do{
    if (tipo = soma){
        console.log(`O reultado da soma é: ${resultado.soma}`),
    }else if (tipo = subtracao){
        console.log(`O reultado da subtração é: ${resultado.subtracao}`),
    }else if (tipo = multiplicacao){
        console.log(`O reultado da multiplicação é: ${resultado.multiplicacao}`),
    }else if (tipo = divisao){
        if(num=0){
            console.log('O valor não pode ser dividido')
        }
    } else{
        console.log(`O reultado da divisão é: ${resultado.divisao}`)
    }
}while