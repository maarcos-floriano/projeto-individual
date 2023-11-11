var database = require("../database/config");

function buscarPorId(id) {
  var query = `select * from patrulhas where id = '${id}'`;

  return database.executar(query);
}

function listar() {
  var query = `select * from patrulhas`;

  return database.executar(query);
}

function buscarPorNome(nomePatrulha) {
  var query = `select * from patrulhas where ptr_nome = '${nomePatrulha}'`;

  return database.executar(query);
}

// function cadastrar(razaoSocial, cnpj) {
//   var query = `insert into patrulhas (razao_social, cnpj) values ('${razaoSocial}', '${cnpj}')`;

//   return database.executar(query);
// }

module.exports = { 
  buscarPorNome, 
  buscarPorId, 
  /*cadastrar,*/ 
  listar
};
