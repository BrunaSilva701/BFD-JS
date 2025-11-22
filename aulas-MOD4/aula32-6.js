// 1. Importa os módulos necessários
const http = require('http');

// Definimos a porta que o servidor vai escutar
const PORT = 4000;

// 2. Cria a função de manipulação de requisição
// request (req) contém informações da requisição (ex: headers, URL)
// response (res) é usado para enviar a resposta ao cliente
const requestHandler = (req, res) => {
    // 3. Obtém o horário atual
    const now = new Date();
    // Formata a hora no padrão HH:MM:SS
    const horaAtual = now.toLocaleTimeString('pt-BR'); 

    // 4. Define o objeto de resposta
    // Substitua "Seu Nome" pelo seu nome
    const responseData = {
        "autor": "Seu Nome", 
        "mensagem": "API funcionando!",
        "hora": horaAtual
    };

    // 5. Configura o cabeçalho da resposta
    // Indicamos que a resposta será no formato JSON (application/json)
    res.setHeader('Content-Type', 'application/json');
    // Indicamos que a resposta foi bem-sucedida (código 200 OK)
    res.writeHead(200);

    // 6. Envia a resposta (convertendo o objeto para uma string JSON)
    res.end(JSON.stringify(responseData, null, 2));
};

// 7. Cria o servidor HTTP
const server = http.createServer(requestHandler);

// 8. Inicia o servidor para escutar na porta definida
server.listen(PORT, (err) => {
    if (err) {
        return console.log('Algo deu errado', err);
    }
    console.log(`\nServidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}\n`);
});