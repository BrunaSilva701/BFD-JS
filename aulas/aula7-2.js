//Função para calcular media

const entrada = require ('prompt-sync')({sigint:false});

function media(m1, m2, m3){
    return (m1+m2+m2)/3
}

let m1 =    Number(entrada('Informe a primeira nota: '))
let m2 = Number(entrada('Informe a segunda nota: '))
let m3 = Number(entrada('Informe a terceira nota: '))
let resultado = media(m1,m2,m3)
console.log(`A média é: ${resultado}`)