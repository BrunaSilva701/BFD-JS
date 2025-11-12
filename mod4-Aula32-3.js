//Criando um servidor HTTP simples

//Importa o módulo HTTP nativo
const http = require("http");

//Cria o servidor
const servidor = http.createServer((req, res) => 
{
    //Define o cabeçalho da resposta
    res.writeHead(200, {"Content-Type":
    "application/json"});

    //Cria um objeto com dados a seerem retornados
    const resposta = {
        mensagem : "Servidor Node.js funcionando!",
        data: new Date().toLocaleString()
    };

    //Envia a resposta convertida para JSON
    res.end(JSON.stringify(resposta));
});

//Define a porta do servidor
const PORTA = 3000;

//Inicia o servidor
servidor.listen(PORTA, () => {
    console.log(`Servidor ativo em http://localhost:${PORTA}`);
});
