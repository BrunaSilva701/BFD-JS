// src/server.js
// Servidor HTTP básico no Node.js

// Importa o módulo nativo HTTP
const http = require ("http");

// Cria o servidor
const server = http.createServer((req, res) => {
    // Define o tipo de conteúdo da resposta
    res.writeHead(200, {"Content-Type":"application/json"});

    // Cria um objeto JavaScript para enviar como resposta
    const resposta = {
        mensagem: "Servidor Node.js ativo e funcionando!", data: new Date().toLocaleString()
    };

    // Envia o objeto convertido para JSON
    res.end(JSON.stringify(resposta));
});

// Define a porta do servidor
const PORTA = 3000;

// Inicia o servidor e exibe mensagem no console
server.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});

// Explicação linha a linha
// require("http") -> Importa o módulo nativo para criar servidores web
// http.creatServer() -> Função que cria o servirdor
// (req, res) -> Parâmetro que representa a requisição e a resposta
// res.writeHead() -> Define o tipo de resposta (JSON)
// JSON.stringfy() -> Converte o onjeto em texto JSON
// serveer.listen(PORTA)  -> Inicia o servidor e o deixa "escutando" na porta 3000