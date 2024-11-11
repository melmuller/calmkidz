// Importa a configuração da conexão com o banco de dados
const connection = require('../config/db');
// Importa e carrega as variáveis de ambiente
const dotenv = require('dotenv').config();

// Função assíncrona para armazenar uma nova tarefa (postagem) no banco de dados
async function storeTask(request, response) {
    console.log(request.body);
    // Obtém os parâmetros do corpo da requisição e os coloca em um array
    const params = Array(
        request.body.title, // Título da postagem
        request.body.blog,   // Conteúdo da postagem
        request.body.nomeUsuario
    );

    //TALVEZ FAZER UM INNERJOIN BUSCANDO PELO ID DO USER

    // Consulta SQL para inserir uma nova postagem na tabela 'postagens'
    const query = "INSERT INTO postagens(titulo, conteudo, nomeUser) VALUES(?,?,?)";

    // Executa a consulta SQL
    connection.query(query, params, (err, results) => {
        // Log para depuração: mostra os valores e resultados da consulta
        console.log("Entrou aqui");
        console.log(query, params, results);

        // Verifica se a consulta foi bem-sucedida e retorna a resposta apropriada
        if (results) {
            // Responde com sucesso se a postagem for inserida corretamente
            response
                .status(201)
                .json({
                    success: true, // Corrigido 'succes' para 'success'
                    message: "Postado!",
                    data: results
                });
        } else {
            // Responde com erro se houver um problema ao inserir a postagem
            response
                .status(400)
                .json({
                    success: false, // Corrigido 'succes' para 'success'
                    message: "Deu problema!",
                    data: err
                });
        }
    });
}
// Função assíncrona para buscar todas as postagens do banco de dados
async function buscandoCom(request, response) {
    // Define a consulta SQL para selecionar todas as postagens da tabela 'postagens'
    const query = "SELECT * FROM postagens";

    // Executa a consulta SQL
    connection.query(query, (err, results) => {
        // Verifica se a consulta foi bem-sucedida e retorna a resposta apropriada
        if (results) {
            // Responde com sucesso se a consulta for bem-sucedida
            response
                .status(200) // Corrigido de 201 para 200 para uma operação GET
                .json({
                    success: true, // Corrigido 'succes' para 'success'
                    message: "Sucesso com o GET!",
                    data: results
                });
        } else {
            // Responde com erro se houver um problema ao buscar as postagens
            response
                .status(400)
                .json({
                    success: false, // Corrigido 'succes' para 'success'
                    message: "Deu problema no GET!",
                    data: err
                });
        }
    });
}

async function deletarpost(request, response) {
    // Define a consulta SQL para selecionar todas as postagens da tabela 'postagens'
    const {id} = request.params
    const query = "DELETE FROM postagens WHERE id = ?";

    // Executa a consulta SQL
    connection.query(query, [id], (err, results) => {
        // Verifica se a consulta foi bem-sucedida e retorna a resposta apropriada
        if (results) {
            // Responde com sucesso se a consulta for bem-sucedida
            response
                .status(200) // Corrigido de 201 para 200 para uma operação GET
                .json({
                    success: true, // Corrigido 'succes' para 'success'
                    message: "Sucesso ao deletar!",
                    data: results
                });
        } else {
            // Responde com erro se houver um problema ao buscar as postagens
            response
                .status(400)
                .json({
                    success: false, // Corrigido 'succes' para 'success'
                    message: "Problemas ao deletar!",
                    data: err
                });
        }
    });
}

// Exporta as funções storeTask e buscandoCom para serem usadas em outros arquivos
module.exports = {
    storeTask,
    buscandoCom,
    deletarpost
};