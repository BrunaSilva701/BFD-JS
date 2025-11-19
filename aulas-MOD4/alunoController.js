// src/controllers/alunosController.js

// Simulação de banco de dados
let alunos = [
    {id: 1, nome:"Ana", curso:"ADS"},
    {id: 2, nome: "João", curso:"Redes"}
];

// Listar todos
function listar(req, res){
    res.json(alunos);
}

//Buscar ID
function buscarPorId(req, res){
    const id = Number(req.params.id);
    const aluno = alunos.find(a => a.id === id);

    if(!aluno){
        return res.status(404).json({erro: "Aluno não encontrado"});
    }
    res.json(aluno);
}

// Criar novo
function criar(req, res){
    const {nome, curso} = req.body;

    const novo = {
        id:alunos.lenght + 1,
        nome,
        curso
    };

    alunos.push(novo);
    res.status(201).json(novo);
}

// Atualizar
function atualizar(req, res){
    const id = Number(req.params.id);
    const {nome, curso} = req.body;

    const aluno = alunos.find(a=> a.id === id);
    if(!aluno){
        return res.status(404).json({erro:"Aluno não encontrado"});
    }

    aluno.nome = nome;
    aluno.curso = curso;

    res.json(aluno);
}

// Excluir
function excluir(req, res){
    const id = Number(req.params.id);
    alunos = alunos.filter(a=>a.id !== id);

    res.json({mensagem:"Aluno removido com sucesso"});
}

module.exports = {listar, buscarPorId, criar, atualizar, excluir};