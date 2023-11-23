var express = require("express");
var router = express.Router();

var insigniaController = require("../controllers/insigniaController.js");

router.post("/conquistar/:idUsuario", function (req, res) {
    // função a ser chamada quando acessar /guia/listar
    insigniaController.conquistar(req, res);
});

router.post("/remover/:idUsuario", function (req, res) {
    // função a ser chamada quando acessar /guia/listar
    insigniaController.remover(req, res);
});

router.post("/listar/:idUsuario", function (req, res) {
    // função a ser chamada quando acessar /guia/listar
    insigniaController.listar(req, res);
});

module.exports = router;