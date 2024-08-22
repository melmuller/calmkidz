// Importa o módulo Express
const express = require('express');

// Cria um novo roteador para definir as rotas
const loginrouter = express.Router();

// Importa a função de login do controlador
const { login } = require("../controller/loginController");

// Define a rota GET para o endpoint '/login', que utiliza a função de login
loginrouter.get('/login', login);

// Exporta o roteador para ser usado em outros arquivos
module.exports = loginrouter;