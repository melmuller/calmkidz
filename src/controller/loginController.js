// Importa a configuração da conexão com o banco de dados
const connection = require('../config/db');

// Função assíncrona para realizar o login
async function login(request, response) {
    // Obtém o email do corpo da requisição e o coloca em um array
    const email = Array(request.query.email);

    // Consulta SQL para selecionar usuário com base no email fornecido
    const query = "SELECT nome, email, senha FROM usuario WHERE email = ?;";

    // Executa a consulta SQL
    connection.query(query, email, (err, results) => {

        // Verifica se há resultados (usuário encontrado)
        if (results.length > 0) {
            
            // Obtém a senha fornecida e a senha recuperada do banco de dados
            const password = request.query.senha;
            const passwordQuery = results[0].senha;
            const conta = results[0];

            // Compara a senha fornecida com a senha recuperada
            if (password === passwordQuery) {
                //deleta senha para localstorage
                delete conta.senha;
                // Responde com sucesso se as senhas coincidirem
                response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: conta
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