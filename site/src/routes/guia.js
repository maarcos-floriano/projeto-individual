var express = require("express");
var router = express.Router();

var guiaController = require("../controllers/guiaController");

router.get("/ultimas/:fkUsuario", function (req, res) {
    guiaController.buscarAtividadesFeitas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;