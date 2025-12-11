//Conversão de JSON

//Converte JSON (texto) para objeto JavaScript
const dados = JSON.parse('{"nome": "Carlos", "Idade":32}');
console.log(dados.nome);

// Converte objeto JavaScript e, JSN
const objeto = {curso: "Desenvolvimento de sistemas", carga: 21};
const json = JSON.stringify(objeto);
console.log(json);

