// Importa a configuração da conexão com o banco de dados
const connection = require('../config/db');

// Função assíncrona para armazenar um novo usuário no banco de dados
async function storeUser(request, response) {
    // Log para depuração: mostra o corpo da requisição recebido
    console.log(request.body);
    
    // Obtém os parâmetros do corpo da requisição e os coloca em um array
    const params = Array(
        request.body.nome,     // Nome do usuário
        request.body.email,    // Email do usuário
        request.body.senha // Senha do usuário
    );

    // Consulta SQL para inserir um novo usuário na tabela 'users'
    const query = "INSERT INTO usuario(nome, email, senha) VALUES (?,?,?)";

    // Executa a consulta SQL
    connection.query(query, params, (err, results) => {
        // Verifica se a consulta foi bem-sucedida e retorna a resposta apropriada
        if (results) {
            // Responde com sucesso se o usuário for inserido corretamente
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                });
        } else {
            // Responde com erro se houver um problema ao inserir o usuário
            response
                .status(400)
                .json({
                    success: false,
                    message: "Sem sucesso!",
                    data: err // Corrigido 'data' para 'err' para refletir o erro real
                });
        }
    });
}

// Exporta a função storeUser para ser usada em outros arquivos
module.exports = {
    storeUser
};