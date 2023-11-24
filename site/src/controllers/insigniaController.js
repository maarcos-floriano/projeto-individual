var insigniaModel = require('../models/insigniaModel.js');

function listar(req, res) {
    var idUsuario = req.params.idUsuario;
    // var insignia_desc = req.body.insignia_desc;
    
    if (idUsuario == undefined) {
        res.status(400).send('Insiginia nome está undefined!');
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
    var descInsigniaNo = req.body.insigniaNo_desc;
    var idUsuario = req.params.idUsuario;
    
    if (descInsigniaNo == undefined || idUsuario == undefined) {
        res.status(400).send('Guia nome está undefined!');
    }

    var promises = [];
    for(var i = 0; i < descInsigniaNo.length; i++){
        promises.push(insigniaModel.remover(descInsigniaNo[i], idUsuario));
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
    var descInsignia = req.body.insignia_desc;
    var idUsuario = req.params.idUsuario;
    
    if (descInsignia == undefined || idUsuario == undefined) {
        res.status(400).send('Guia nome está undefined!');
    }

    var promises = [];
    for(var i = 0; i < descInsignia.length; i++){
        promises.push(insigniaModel.conquistar(descInsignia[i], idUsuario));
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