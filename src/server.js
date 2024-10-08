// Importa o aplicativo Express configurado a partir do arquivo app.js
const app = require("./app");

// Obtém o número da porta configurada no aplicativo
const port = app.get('port');

// Inicia o servidor na porta configurada e exibe uma mensagem no console
app.listen(port, () => console.log(`Rodando na porta ${port}`));

const swaggerUi = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API de Tarefas",
      version: "1.0.0",
      description: "API CRUD para gerenciar posts",
    },
    servers: [{ url: "http://localhost:3003" }],
  },
  apis: [`${__dirname}/routes/*.js`], // caminho para as rotas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
