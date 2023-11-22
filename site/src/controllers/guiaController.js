var guiaModel = require('../models/guiaModel.js');

function listar(req, res) {
    var idUsuario = req.params.idUsuario;
    // var guia_nome = req.body.guia_nome;
    
    if (idUsuario == undefined) {
        res.status(400).send('Guia nome está undefined!');
    }
    
    guiaModel.listar(idUsuario)
        .then(function (resposta) {
            res.status(200).json(resposta);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

function remover(req, res){
    var nomeGuiaNo = req.body.guiaNo_nome;
    var idUsuario = req.params.idUsuario;
    
    if (nomeGuiaNo == undefined || idUsuario == undefined) {
        res.status(400).send('Guia nome está undefined!');
    }

    var promises = [];
    for(var i = 0; i < nomeGuiaNo.length; i++){
        promises.push(guiaModel.remover(nomeGuiaNo[i], idUsuario));
    }

    Promise.all(promises)
        .then(function (respostas) {
            res.status(200).json(respostas);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

function conquistar(req, res) {
    var guia_nome = req.body.guia_nome;
    var idUsuario = req.params.idUsuario;
    
    if (guia_nome == undefined || idUsuario == undefined) {
        res.status(400).send('Guia nome está undefined!');
    }

    var promises = [];
    for(var i = 0; i < guia_nome.length; i++){
        promises.push(guiaModel.conquistar(guia_nome[i], idUsuario));
    }

    Promise.all(promises)
        .then(function (respostas) {
            res.status(200).json(respostas);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listar,
    conquistar,
    remover
};