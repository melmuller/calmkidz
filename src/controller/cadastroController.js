const connection = require('../config/db');
 
async function storeCadastroAnimais(request, response) {
    // recuperar dados do form
    const params = Array(
        request.body.email,
        request.body.senha,
        request.file.filename
    );
    // comando no banco
    const query = "INSERT INTO cadastro_animais(email,senha) VALUES(?,?,?,?)";
 
    connection.query(query, params, (err, results) => {
        console.log(err,results)
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Sucesso",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "Sem Sucesso",
                    data: err
                })
        }
    })
}

module.exports = {
    storeUser
};