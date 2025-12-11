// src/routes/alunosRoutes.js

const express = require("express");
const controller = require("../controller/alunoController");

//Criar o roteador
const router = express.Router();

//EndPoints
router.get("/", controller.listar);
router.get("/:id", controller.buscarPorId);
router.post("/", controller.criar);
router.put("/:id", controller.atualizar);
router.delete("/:id", controller.excluir);

module.exports = router;