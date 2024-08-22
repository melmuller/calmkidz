// Importa o módulo Express
const express = require("express");

// Carrega variáveis de ambiente do arquivo .env
const dotenv = require("dotenv").config();

// Importa o middleware CORS para permitir requisições de outros domínios
const cors = require("cors");

// Importa as rotas definidas para tarefas
const router = require("./routes/taskRoutes");
const userrouter = require("./routes/usersRouter");
const loginrouter = require('./routes/loginRouter');

// Cria uma nova instância do aplicativo Express
const app = express();

// Middleware para parsing de JSON no corpo das requisições
app.use(express.json());

// Middleware para permitir CORS
app.use(cors());

// Prefixo para as rotas da API
app.use("/api", router);
app.use("/api", userrouter);
app.use('/api', loginrouter);

// Configura a porta do servidor, utilizando a variável de ambiente PORT ou a porta 3008 por padrão
app.set('port', process.env.PORT || 3008);

// Exporta o aplicativo para ser utilizado em outros arquivos
module.exports = app;