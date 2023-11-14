var guiaModel = require("../models/guiaModel");

function buscarAtividadesFeitas(req, res) {

    const limite_linhas = 11;

    var fkUsuario = req.params.fkUsuario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    guiaModel.buscarAtividadesFeitas(fkUsuario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports= {
    buscarAtividadesFeitas
}