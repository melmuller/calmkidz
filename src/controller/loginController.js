// Importa a configuração da conexão com o banco de dados
const connection = require('../config/db');

// Função assíncrona para realizar o login
async function login(request, response) {
    // Obtém o email do corpo da requisição e o coloca em um array
    const email = Array(request.body.email);
    console.log(request.body.email);

    // Consulta SQL para selecionar usuário com base no email fornecido
    const query = "SELECT nome, email, senha FROM usuario WHERE email = ?;";

    // Executa a consulta SQL
    connection.query(query, email, (err, results) => {

        // Verifica se há resultados (usuário encontrado)
        if (results.length > 0) {
            
            // Obtém a senha fornecida e a senha recuperada do banco de dados
            const password = request.body.password;
            const passwordQuery = results[0].senha;

            // Compara a senha fornecida com a senha recuperada
            if (password === passwordQuery) {
                // Responde com sucesso se as senhas coincidirem
                response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                });
        
            } else {
                // Responde com erro se as senhas não coincidirem
                response
                .status(400)
                .json({
                    success: false,
                    message: "Dados incorretos",
                });
            }
        } else {
            // Responde com erro se o usuário não for encontrado
            response
                .status(400)
                .json({
                    success: false,
                    message: "Sem sucesso!",
                    data: err
                });
        }
    });
}

// Exporta a função login para ser usada em outros arquivos
module.exports = {
    login
};