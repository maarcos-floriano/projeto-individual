var express = require("express");
var router = express.Router();

var patrulhasController = require("../controllers/patrulhasController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
// router.post("/cadastrar", function (req, res) {
//     empresaController.cadastrar(req, res);
// })

router.get("/buscar", function (req, res) {
  patrulhasController.buscarPorNome(req, res);
});

router.get("/buscar/:id", function (req, res) {
  patrulhasController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  patrulhasController.listar(req, res);
});

module.exports = router;