var insigniaModel = require('../models/insigniaModel.js');

function listar(req, res) {
    var idUsuario = req.params.idUsuario;
    // var insignia_desc = req.body.insignia_desc;
    
    if (idUsuario == undefined) {
        res.status(400).send('Guia nome está undefined!');
    }
    
    insigniaModel.listar(idUsuario)
        .then(function (resposta) {
            res.status(200).json(resposta);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

function remover(req, res){
    var nomeInsigniaNo = req.body.insigniaNo_nome;
    var idUsuario = req.params.idUsuario;
    
    if (nomeInsigniaNo == undefined || idUsuario == undefined) {
        res.status(400).send('Guia nome está undefined!');
    }

    var promises = [];
    for(var i = 0; i < nomeInsigniaNo.length; i++){
        promises.push(insigniaModel.remover(nomeInsigniaNo[i], idUsuario));
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
    var insignia_desc = req.body.insignia_desc;
    var idUsuario = req.params.idUsuario;
    
    if (insignia_desc == undefined || idUsuario == undefined) {
        res.status(400).send('Guia nome está undefined!');
    }

    var promises = [];
    for(var i = 0; i < insignia_desc.length; i++){
        promises.push(insigniaModel.conquistar(insignia_desc[i], idUsuario));
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