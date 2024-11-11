// Importa o módulo mysql2 para interagir com o banco de dados MySQL
const mysql = require("mysql2");

// Importa e carrega variáveis de ambiente do arquivo .env
const dotenv = require("dotenv").config();

// Cria uma conexão com o banco de dados MySQL usando as variáveis de ambiente
const connection = mysql.createConnection({
    host: process.env.DB_HOST,         // Endereço do servidor do banco de dados
    user: process.env.DB_USER,         // Nome de usuário para autenticação
    password: process.env.DB_PASSWORD || '', // Senha para autenticação
    database: process.env.DB_DATABASE  // Nome do banco de dados a ser usado
});

// Conecta ao banco de dados e exibe uma mensagem de sucesso ou erro
connection.connect(function (err) {
    if (err) {
        // Lança um erro se a conexão falhar
        throw err;
    } else {
        // Exibe uma mensagem no console se a conexão for bem-sucedida
        console.log("MySql Conectado!")
    }
});

// Exporta a conexão para que possa ser utilizada em outros arquivos
module.exports = connection;