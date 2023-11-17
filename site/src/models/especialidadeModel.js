var database = require("../database/config");

function remover(idUsuario) {
  var instrucao = `
    update especialidades set espec_possui = false where fkUsuario = ${idUsuario}
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
function conquistar(nomeEspec, modalidadeEspec, checkEspec, idUsuario) {
  var instrucao = `
  insert into especialidades(espec_nome, espec_modalidade, espec_possui, fkUsuario) values
  ("${nomeEspec}", "${modalidadeEspec}", ${checkEspec}, ${idUsuario});
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  conquistar,
  remover
};