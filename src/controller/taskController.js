const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {
    const params = Array(
        request.body.title,
        request.body.blog
    )

    const query = "INSERT INTO postagens(titulo, conteudo) VALUES(?,?)"

    connection.query(query, params, (err, results) => {
        console.log(query, params, results)
        if (results) {
            response
                .status(201)
                .json({
                    succes: true,
                    message: "Postado!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    succes: false,
                    message: "Deu problema!",
                    data: err
                })
        }
    })
}

async function buscandoCom(request, response) {
    // async function storeTask(request, response): Declara uma função chamada storeTask, que recebe um objeto request e um objeto response como parâmetros.

    const query = "SELECT * FROM postagens";

    // Define a consulta SQL para inserir uma nova postagem na tabela postagens com os campos titulo e conteudo.

    connection.query(query, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
                    succes: true,
                    message: "Sucesso com o GET!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    succes: false,
                    message: "Deu problema no GET!",
                    data: err
                })
        }
    })
}

module.exports = {
    storeTask,
    buscandoCom
}

