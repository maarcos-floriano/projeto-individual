var especialidadeModel = require("../models/especialidadeModel");

function remover(req, res) {
  var nomeEspecNo = req.body.especNo_nome;
  var idUsuario = req.params.idUsuario;

  if (idUsuario == undefined) {
    res.status(400).send("Especialidade nome está undefined!");
  }

  var promises = nomeEspecNo.map(function (nome) {
    return especialidadeModel.remover(nome, idUsuario);
  });

  Promise.all(promises)
    .then(function (respostas) {
      res.status(200).send("Especialidades removidas com sucesso");
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    });
}

function conquistar(req, res) {
  var nomeEspec = req.body.espec;
  var checkEspec = req.body.espec_possui;
  var idUsuario = req.params.idUsuario;

  if (idUsuario == undefined) {
    return res.status(400).send("Especialidade nome está undefined!");
  }
  
  var promises = nomeEspec.map(function(especialidade) {
    return especialidadeModel.conquistar(especialidade.nome, especialidade.modalidade, checkEspec, idUsuario);
  });

  Promise.all(promises)
    .then(function (respostas) {
      res.status(200).send("Especialidades inseridas com sucesso");
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    });
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

