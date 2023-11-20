var express = require("express");
var router = express.Router();

var guiaController = require("../controllers/guiaController.js");

router.post("/conquistar/:idUsuario", function (req, res) {
    // função a ser chamada quando acessar /guia/listar
    guiaController.listar(req, res);
});

router.post("/listar/:idUsuario", function (req, res) {
    // função a ser chamada quando acessar /guia/listar
    guiaController.listar(req, res);
});

module.exports = router;