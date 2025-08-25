//aula 1
let cidade='Olinda';
let ano = 2025;
console.log(`A cidade é ${cidade}e o ano é ${ano}`);

//aula 2-1
const entrada = require('prompt-sync') ({sigint:false}); //interrompe uma linha (true: interrompe o código todo)

let nome = entrada ('Digite seu nome: ');
console.log(nome);

//aula2-2
const entrada = require('prompt-sync') ({sigint:false});

let idade = entrada('Qual a sua idade? ');
idade = Number(idade);
console.log('Ano que vem você terá: ' + (idade + 1));

//aula2-3
//Calculo da média//

const entrada = require('prompt-sync') ({sigint:false});

let n1 = entrada('Digite a primeira nota: ');
let n2 = entrada('Digite a segunda nota: ');
let n3 = entrada('Digite a terceira nota: ');

n1 = Number (n1);
n2 = Number (n2);
n3 = Number (n3);

let media = (n1 + n2 + n3)/3;

console.log('A média é: ' + media);

//aula2-4
//Calculo de multa

const entrada = require('prompt-sync') ({sigint:false});

let atraso= entrada('Quantos dias de atraso? ');
console.log('A multa é de: ' + (1.50*atraso));

//aula2-5
//Calculo do rateio

const entrada = require('prompt-sync') ({sigint:false});

let agua = entrada('Qual o valor da conta de água? ');
let energia = entrada('Qual o valor da conta de energia? ');
let apartamento = entrada('Qual a quantidade de apartamentos? ');

agua = Number(agua);
energia = Number(energia);
apartamento = Number(apartamento);

let rateio = (agua + energia)/apartamento

console.log(`Cada morador irá pagar: ${rateio}`);

//aula2-6
//Voto

const entrada = require('prompt-sync') ({sigint:false});

let idade= entrada(console.log('Digite sua idade'));
idade= Number(idade);

if (idade >=16){
    console.log('Você pode votar!!');
}else{
    console.log('Você não pode votar');
}

//aula2-7
// numeros pares e impares

const entrada = require('prompt-sync') ({sigint:false});

let num = entrada('Digite um número: ');

if (num % 2 === 0){
    console.log('O número é par')
}else{
    console.log('O número é impar')
}

//aula2-8
//Calculo de conceito de nota

const entrada = require('prompt-sync') ({sigint:false});

let media = entrada ("Digite sua media: ")

if (media >=9){ 
    console.log("Conceito A")
}else if (media >=7 && media<9){
    console.log("Conceito B")
}else if (media >=5 && media <7){
    console.log("Conceito C")
}else {
    console.log("Conceito D")
}

//aula2-9
//Calculo do IMC

const entrada = require('prompt-sync') ({sigint:false});

let peso = entrada('Digite seu peso: ');
let altura = entrada('Digite sua altura: ');

imc = peso/(altura*altura)

if (imc <18.5){
    console.log('Abaixo do peso')
}else if(imc>=18.5 && imc<=24.9){
    console.log('Peso normal')
}else if (imc>=25.0 && imc<=29.9){
    console.log('Sobrepeso')
}else if (imc>=30.0 && imc<=34.9){
    console.log('Obesidade grau 1')
}else if (imc>=35.0 && imc<=39.0){
    console.log('Obesidade grau 2')
}else{
    console.log('Obesidade grau 3')
}

//aula3-1
const entrada = require ('prompt-sync')({sigint:false});

let senha;
do {
    senha = entrada ("Digite a senha: ");
} while (senha !== "1234");
console.log("Senha correta! Acesso liberado.");

//aula3-2
// Números de 1 a N

const entrada = require ('prompt-sync')({sigint:false});

let n = entrada ('Digite um número: ')
let num = 1;
while (num <= n) {
    console.log('Os números são: ', num);
    num++
}

//aula3-3
//Tabuada de um número

const entrada = require ('prompt-sync')({sigint:false});

let num = entrada ('Digite um número: ');
for (let i =1; i <= 10; i++){
    let resultado = num * i
    console.log('A tabuada é: ' + resultado);
}

//aula3-4
//Soma dos números pares entre 1 e 100

const entrada = require ('prompt-sync')({sigint:false});

let soma = 0;

for (let i = 2; i <=100; i += 2){
    if(i %2 ===0)
    soma += i
}

console.log('A soma é: ' + soma);

//aula3-5
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

//aula7-1
//Calculadora simples

const entrada = require ('prompt-sync')({sigint:false});

function soma(num1, num2){
    return num1 + num2;
}

let num1 = Number(entrada('Digite o primeiro valor: '));
let num2 = Number(entrada('Digite o segundo valor: '));
let resultado = soma(num1, num2)
console.log(`O resultado é: ${resultado}`)

//aula7-2
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

//aula7-3
//Celcius para Fahrenheit

const entrada = require ('prompt-sync')({sigint:false});

function celciusParaFahrenheit(temperatura){
    return (temperatura*9/5)+32
}

let c = Number(entrada('Digite a temperatura em Celcius: '));
let resultado = celciusParaFahrenheit(c);
console.log(`A conversão de Celcius para Fahrenheit é: ${resultado} `);


