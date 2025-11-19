// src/server.js
// Servidor inicial usando Express.js

const express = require("express");

// Cria a aplicação
const app = express();

// Permite JSON
app.use(express.json());

//Rotas de alunos
const alunosRoutes = require("./router/alunoRouter");
app.use("/alunos", alunosRoutes);

app.get("/", (req, res) => {
    res.json({messagem: "API express funcionando!"});
});

app.listen(3000,() => {
    console.log("Servidor rodando em http://localhost:3000");
});

// Informação linha a linha:
// const express = require ("express") -> importa o framework
// const app = express() -> Inicia a aplicação express
// app.use(express.json()) -> Permite receber o JSON no corpo das requisições
// app.get("/", ...) -> Cria a rota do tipo GET
// app.listen(PORTA) -> Inicia o servidor

// // Rotas criadas
// const alunosRoutes = require("./routes/alunosRoutes");
// app.use("/alunos", alunosRoutes);