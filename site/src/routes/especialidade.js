var express = require("express");
var router = express.Router();

var especialidadeController = require("../controllers/especialidadeController");

router.post("/conquistar/:idUsuario", function (req, res) {
    // função a ser chamada quando acessar /especialidade/conquistar
    especialidadeController.conquistar(req, res);
});

router.post("/remover/:idUsuario", function (req, res) {
    // função a ser chamada quando acessar /especialidade/remover
    especialidadeController.remover(req, res);
});

router.post("/listarEspec/:idUsuario", function (req, res) {
    // função a ser chamada quando acessar /especialidade/listar
    especialidadeController.listarEspec(req, res);
});

router.post("/atualizarGrafico/:idUsuario", function (req, res) {
    especialidadeController.atualizarGrafico(req, res);
});

module.exports = router;
