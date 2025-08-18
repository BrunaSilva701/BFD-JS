const entrada = require('prompt-sync')({sigint:false});

let contador = 0;
let cidade; 

do{
    cidade = entrada ('Digite o nome de Cidades (Digite "fim" para parar): ');
    if (cidade.toLowerCase() !== 'fim'){
        contador++
    }else{
        console.log('Sistema finalizado');
    }
}while (cidade.toLowerCase() !== 'fim')

console.log(`A quantidade de Cidades foi ${contador} :`)

//.toLowerCase() : garante que o código funcione corretamente, não importa como o usuário digite a palavra "fim" ("fim", "Fim", "FIM", "fiM")
//Lembrar de por string com ''.
//O if evita que 'fim' seja contado
