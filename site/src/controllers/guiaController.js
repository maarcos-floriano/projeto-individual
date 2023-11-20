var guiaModel = require('../models/guiaModel.js');

function listar(req, res) {
    var idUsuario = req.params.idUsuario;
    
    if (idUsuario == undefined) {
        res.status(400).send('Guia nome está undefined!');
    }
    
    guiaModel.listar(idUsuario).then(function (resposta) {
        res.status(200).json(resposta);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function conquistar(req, res) {
    var nomeGuia = req.body.nomeGuia;
    var idUsuario = req.params.idUsuario;
    
    if (nomeEspec == undefined || idUsuario == undefined) {
        res.status(400).send('Guia nome está undefined!');
    }
    
    guiaModel.conquistar(nomeEspec, idUsuario).then(function (resposta) {
        res.status(200).json(resposta);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar,
    conquistar
};