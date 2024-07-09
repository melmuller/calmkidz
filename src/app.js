const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const router = require("./routes/taskRoutes");
const app = express();

// Middleware para parsing de JSON
app.use(express.json());

// Middleware para permitir CORS
app.use(cors());

const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');

// Prefixo para as rotas da API
app.use("/api", router);

// Configuração da porta
app.set('port', process.env.PORT || 3008);

app.use('/api', usersRouter);
app.use('/api', loginRouter);

module.exports = app;
