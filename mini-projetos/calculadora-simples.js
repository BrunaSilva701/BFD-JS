//Mini-Projeto I

const entrada = require('prompt-sync')({sigint:false});

function calcular(n1,n2){
    return{
        soma: n1+n2,
        subtracao: n1-n2,
        multiplicacao: n1*n2,
        divisao: n2 !== 0 ? n1 / n2 : null, // evita divisão por zero
    }
}

let tipo;

do{
    tipo = entrada ('Qual operação deseja realizar (soma: + ,subtração: - ,multiplicação: *  ou divisão: / ? ). Para sair, digite "Sair" ').toLowerCase();

    if(tipo === 'sair'){
        console.log('Programa encerrado.');
        break
    }

    if (!['+', '-', '*', '/']) {
        console.log('Operação inválida. Tente novamente.');
        continue
    }

    let n1 = Number(entrada('Digite o primeiro valor: '));
    let n2 = Number(entrada('Digite o segundo valor: '));
    let resultado = calcular(n1,n2)

    if (tipo === '+'){
        console.log(`O reultado da soma é: ${resultado.soma}`);
    } else if (tipo === '-'){
        console.log(`O reultado da subtração é: ${resultado.subtracao}`);
    } else if (tipo === '*'){
        console.log(`O reultado da multiplicação é: ${resultado.multiplicacao}`);
    } else if (tipo === '/'){
        if(resultado.divisao === null){
            console.log('Divisão por 0 não é permitida');
        }else{
            console.log(`O resultado da divisão é: ${resultado.divisao}`);
        }
    }
}while(true);

// break – Interrompe o laço completamente (sai do loop)
// continue – Pula para a próxima iteração (volta para o inicio do loop)

//PS: verificar se um valor está presente dentro de um array (ou string) no if com os tipos: includes, switch, comparação com if, set e has
