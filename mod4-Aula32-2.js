//Trabalhando com váriaveis e JSON

//Cria um objeto JavaScript
const aluno ={
    nome: "João Pedro",
    curso: "Desenvolvimento de sistemas",
    modulo: 2
};

//Exibe o objeto original
console.log("Objeto JavaScript", aluno);

//Converte para JSON
const jsonAluno = JSON.stringify(aluno);
console.log("Em formato JSON: ", jsonAluno);
