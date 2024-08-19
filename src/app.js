// Importa o módulo Express
const express = require("express");

// Carrega variáveis de ambiente do arquivo .env
const dotenv = require("dotenv").config();

// Importa o middleware CORS para permitir requisições de outros domínios
const cors = require("cors");

// Importa as rotas definidas para tarefas
const router = require("./routes/taskRoutes");

// Cria uma nova instância do aplicativo Express
const app = express();

// Middleware para parsing de JSON no corpo das requisições
app.use(express.json());

// Middleware para permitir CORS
app.use(cors());

// Importa as rotas definidas para usuários e login
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');

// Prefixo para as rotas da API
app.use("/api", router);

// Configura a porta do servidor, utilizando a variável de ambiente PORT ou a porta 3008 por padrão
app.set('port', process.env.PORT || 3008);

// Define os prefixos das rotas para usuários e login
app.use('/api', usersRouter);
app.use('/api', loginRouter);

// Exporta o aplicativo para ser utilizado em outros arquivos
module.exports = app;