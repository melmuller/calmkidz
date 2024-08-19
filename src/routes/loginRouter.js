// Importa o módulo Express
const express = require('express');

// Cria um novo roteador para definir as rotas
const router = express.Router();

// Importa a função de login do controlador
const { login } = require("../controller/loginController");

// Define a rota POST para o endpoint '/login', que utiliza a função de login
router.post('/login', login);

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;