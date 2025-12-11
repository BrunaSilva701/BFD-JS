//Cria um objeto JavaScript
const info = {
  "aluno": "Seu Nome",
  "curso": "Desenvolvimento de Sistemas",
  "tema": "Node.js"
};

//Exibe o objeto original
console.log("Objeto JavaScript", info);

//Converte para JSON
const jsonInfo = JSON.stringify(info);
console.log("Em formato JSON: ", jsonInfo);