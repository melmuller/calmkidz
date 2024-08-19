// Importa o aplicativo Express configurado a partir do arquivo app.js
const app = require("./app");

// Obtém o número da porta configurada no aplicativo
const port = app.get('port');

// Inicia o servidor na porta configurada e exibe uma mensagem no console
app.listen(port, () => console.log(`Rodando na porta ${port}`));