// Conexão com o SQLite 

// src/database/db.js
// Conexão principal com o banco de dados SQLite

// Importa o driver SQLite3
const sqlite3 = require("sqlite3").verbose();

// Abre/cria o arquivo do banco de dados
// Caso o arquivo não exista, ele será gerado automaticamente
const db = new sqlite3.Database("./src/database/database.sqlite", (erro) => {
    if (erro){
        console.error("Erro ao canectar com o banco SQLite:", erro);
    } else{
        console.log("Conexão com SQLite realizada com sucesso!");
    }
}); 

// Exporta a conexão para uso em outros arquivos
module.exports = db;

// Importa o driver SQLite
// Abro ou cria o arquivo database.sqlite
// Conectar automaticamente
// Exporta a variável db para toda a API

// db.all -> Retorna varias linhas