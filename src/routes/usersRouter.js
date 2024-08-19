// Importa o módulo Router do Express
const { Router } = require('express');

// Cria uma nova instância de roteador
const router = Router();

// Importa a função storeUser do controlador de usuários
const { storeUser } = require('../controller/usersController');

// Define a rota POST para o endpoint '/user/create', que utiliza a função storeUser
router.post('/user/create', storeUser);

// Exporta o roteador para ser utilizado em outros arquivos
module.exports = router;   