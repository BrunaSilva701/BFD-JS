//Mini-Projeto I

const entrada = require('prompt-sync')({sigint:false});

// Funções para cada operação
function calcular(n1,n2){
    return{
        soma: n1+n2,
        subtracao: n1-n2,
        multiplicacao: n1*n2,
        divisao:  n1 / n2
    }
}

//Atribuição das variáveis
let tipo;

do{
    //opções de operação
    console.log('\n'); //Quebra de linha
    console.log('Escolha uma operação');
    console.log('soma: +');
    console.log('subtração: -');
    console.log('multiplicação: *');
    console.log('divisão: /');
    console.log('Para encerrar, digite "Sair"'.toLowerCase());  // toLowerCase - reconhece a palavra independente da forma que foi escrita

    tipo = entrada ('Digite a opção de operação: ');

    //Encerra o programa
    if(tipo === 'sair'){
        console.log('Programa encerrado.');
        break  // break – Interrompe o laço completamente (sai do loop)
    }

    //Valores que serão calculados
    let n1 = Number(entrada('Digite o primeiro valor: '));
    let n2 = Number(entrada('Digite o segundo valor: '));
    let resultado = calcular(n1,n2) // atribui o valor retornado pela função

    //Verifica o tipo e executa a operação
    if (tipo === '+'){
        console.log(`O reultado da soma é: ${resultado.soma}`);
    } else if (tipo === '-'){
        console.log(`O reultado da subtração é: ${resultado.subtracao}`);
    } else if (tipo === '*'){
        console.log(`O reultado da multiplicação é: ${resultado.multiplicacao}`);
    } else if (tipo === '/'){
        console.log(`O resultado da divisão é: ${resultado.divisao}`);
    }
}while(true);  //continua por enquanto a condição for atendida