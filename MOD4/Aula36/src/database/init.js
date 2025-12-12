// Criação da tabela
// tODAS AS TABELAS DO BANCO FICAM AQUI
// src/database/init.js
// Script para criar a tabela de alunos no banco SQLite

// Import a conexão já configurada
const db = require("./db");

// Comando SQL para criar tabelas
// IF NOT EXISTE-> Evita erro caso a tabela já exista
const sql = `
    CREATE TABLE IF NOT EXISTS alunos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    curso TEXT NOT NULL
    );
`;

// Executa o comando SQL
db.run(sql, (erro) => {
    if (erro) {
        console.error("Erro ao criar tabela:", erro);
    }else {
        console.log("Tabela 'Alunos' criada com sucesso!");
    }
});