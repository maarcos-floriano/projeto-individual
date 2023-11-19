var especialidadeModel = require("../models/especialidadeModel");

function remover(req, res) {
  var nomeEspecNo = req.body.especNo_nome;
  var idUsuario = req.params.idUsuario;

  if (idUsuario == undefined) {
    res.status(400).send("Especialidade nome está undefined!");
  }

  for (var i = 0; i < nomeEspecNo.length; i++) {
    especialidadeModel
      .remover(nomeEspecNo[i], idUsuario)
      .then(function (resposta) {
        res.status(200).send("Especialidade inserida com sucesso");
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function conquistar(req, res) {
  var nomeEspec = req.body.espec_nome;
  var modalidadeEspec = req.body.espec_modalidade;
  var checkEspec = req.body.espec_possui;
  var idUsuario = req.params.idUsuario;

  if (idUsuario == undefined) {
    res.status(400).send("Especialidade nome está undefined!");
  }

  for (var i = 0; i < nomeEspec.length; i++) {
    especialidadeModel
      .conquistar(nomeEspec[i], modalidadeEspec, checkEspec, idUsuario)
      .then(function (resposta) {
        res.status(200).send("Especialidade inserida com sucesso");
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function listarEspec(req, res){
  var idUsuario = req.params.idUsuario;

  especialidadeModel.listarEspec(idUsuario)
  .then(function(resposta){
    res.status(200).json(resposta);
    res.json({
      espec_nome: resposta[0].espec_nome,
  })
  })
  .catch(function(erro){
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  remover,
  conquistar,
  listarEspec
};
