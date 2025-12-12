// src/controllers/alunosControllerDB.js

const db = require("../database/db")

// Simulação de banco de dados
let alunos = [
    {id: 1, nome:"Ana", curso:"ADS"},
    {id: 2, nome: "João", curso:"Redes"}
];

// Listar todos
function listar(req, res){
    db.all("SELECT * FROM alunos", (erro,linhas) => 
    {
        if(erro) return res.status(500).json ({erro: "Erro ao buscar aunos"});
        res.json(linhas); // Retorna array de alunos
    });
}

//Buscar ID
function buscarPorId(req, res){
    const id = req.params.id;

    db.get("SELECT * FROM alunos WHERE id=?", [id], (erro, linha) => {
        if (erro) return res.status(500).json({erro: "Erro ao buscar aluno"});
        if(!linha) return res.status(404).json({erro: "Aluno não encontrado"});

        res.json(linha); // Retorna um único aluno
    });
}

// Criar novo
function criar(req, res){
    const {nome, curso} = req.body;

    db.run(
        "INSERT INTO alunos(nome, curso) VALUES (?, ?)",
        [nome, curso], 
        function (erro) {
            if (erro) return res.status(500).json({erro: "Erro ao criar aluno"});

            res.status(201).json({
                id: this.lastID, // ID gerado automatcamente
                nome,
                curso
            });
        }
    );
}

// Atualizar
function atualizar(req, res){
    const id = req.params.id;
    const {nome, curso} = req.body;

    db.run (
        "UPDATE alunos SET nome = ?, curso = ? WHERE id = ?",
        [nome, curso, id],
        function (erro){
            if (erro) return res.status(500).json ({ Erro: "Erro ao atualizar aluno"});
            if (this.change === 0)
                return res.status(404).json ({ erro: "Aluno não encontrado"});

            res.json({id, nome, curso});
        }
    );
}

// Excluir
function excluir(req, res){
    const id = req.params.id;

    db.run ("DELETE FROM alunos WHERE id=?", [id], function(erro){
        if(erro) return res.status(500).json ({erro: "Aluno não encontrado"});

        res.json({mensagem: "Aluno removido com sucesso!"});
    });
}

module.exports = {listar, buscarPorId, criar, atualizar, excluir};