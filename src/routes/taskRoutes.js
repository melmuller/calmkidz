// Importa o módulo Router do Express
const { Router } = require("express");

// Cria uma nova instância de roteador
const router = Router();

// Importa as funções storeTask e buscandoCom do controlador de tarefas
const { storeTask, buscandoCom } = require("../controller/taskController");

// Define a rota POST para o endpoint '/store/task', que utiliza a função storeTask
router.post("/store/task", storeTask);

// Define a rota GET para o endpoint '/buscandoPosts', que utiliza a função buscandoCom
router.get("/buscandoPosts", buscandoCom);

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;