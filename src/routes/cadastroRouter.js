const express = require('express');
const router = express.Router();
const upload = require('../config/multer');

const { storeCadastroAnimais } = require("../controller/cadastroAnimaisController");

router.post('/cadastroAnimais', upload.single('foto_animal'), storeCadastroAnimais);
router.get('/posts');

module.exports = router;