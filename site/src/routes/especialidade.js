var express = require("express");
var router = express.Router();

var especialidadeController = require("../controllers/especialidadeController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /especialidade/cadastrar
    especialidadeController.cadastrar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    // função a ser chamada quando acessar /especialidade/listar
    especialidadeController.listar(req, res);
});

module.exports = router;