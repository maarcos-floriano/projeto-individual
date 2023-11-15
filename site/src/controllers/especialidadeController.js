var especialidadeModel = require("../models/especialidadeModel");

function listar(req, res){
    var idUsuario = req.params.idUsuario;

    especialidadeModel.listar(idUsuario).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var nomeEspec = req.body.espec_nome;
    var modalidadeEspec = req.body.espec_modalidadep;
    var checkEspec = req.body.espec_possui;
    var idUsuario = req.params.idUsuario

    if (nomeEspec == undefined) {
        res.status(400).send("Especialidade nome está undefined!");
    }

    especialidadeModel.cadastrar(nomeEspec, modalidadeEspec, checkEspec, idUsuario).then(function(resposta){
        res.status(200).send("Especialidade inserida com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}