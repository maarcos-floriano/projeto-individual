var database = require("../database/config");

function buscarAquariosPorEmpresa(usuarioId) {

  instrucaoSql = `select * from usuarios a where idUsuario = ${usuarioId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// function cadastrar(empresaId, descricao) {
  
//   instrucaoSql = `insert into (descricao, fk_empresa) aquario values (${descricao}, ${empresaId})`;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// }
 

module.exports = {
  buscarAquariosPorEmpresa
  // cadastrar
}
