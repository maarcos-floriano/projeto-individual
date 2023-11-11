var patrulhasModel = require("../models/patrulhasModel");

function buscarPorNome(req, res) {
  var nomePatrulha = req.query.nomePatrulha;

  patrulhasModel.buscarPorNome(nomePatrulha).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  patrulhasModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  patrulhasModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

// function cadastrar(req, res) {
//   var nomePatrulha = req.body.nomePatrulha;
//   var razaoSocial = req.body.razaoSocial;

//   patrulhasModel.buscarPorNome(nomePatrulha).then((resultado) => {
//     if (resultado.length > 0) {
//       res
//         .status(401)
//         .json({ mensagem: `a patrulha com o nome ${nomePatrulha} já existe` });
//     } else {
//       patrulhasModel.cadastrar(razaoSocial, nomePatrulha).then((resultado) => {
//         res.status(201).json(resultado);
//       });
//     }
//   });
// }

module.exports = {
  buscarPorNome,
  buscarPorId,
  // cadastrar,
  listar,
};
