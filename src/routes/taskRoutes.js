// Importa o módulo Router do Express
const { Router } = require("express");

// Cria uma nova instância de roteador
const router = Router();

// Importa as funções storeTask e buscandoCom do controlador de tarefas
const { storeTask, buscandoCom, deletarpost } = require("../controller/taskController");

// Define a rota POST para o endpoint '/store/task', que utiliza a função storeTask
/**
 * @swagger
 * /task/:id:
 *   post:
 *     summary: Define a rota post
 *     responses: 
 *       200:
 *         description: Post do blog
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.post("/store/task", storeTask);

// Define a rota GET para o endpoint '/buscandoPosts', que utiliza a função buscandoCom
/**
 * @swagger
 * /task/:id:
 *   get:
 *     summary: Retorna a publicação
 *     responses:
 *       200:
 *         description: Publicação no blog
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/buscandoPosts", buscandoCom);

// Define a rota DELETE para o endpoint '/buscandoPosts', que utiliza a função buscandoCom
/**
 * @swagger 
 * /task/:id:
 *   delete:
 *     summary: Deleta a publicação
 *     responses:
 *       200:
 *         description: Excluir o post
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.delete("/delete/task/:id", deletarpost);

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;