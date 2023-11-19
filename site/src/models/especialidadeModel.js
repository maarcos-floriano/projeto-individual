var database = require("../database/config");

function remover(nome_espec, idUsuario) {
  var instrucao = `
  DELETE FROM especialidades WHERE espec_nome = "${nome_espec}" AND fkUsuario = ${idUsuario};
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

function listarEspec(idUsuario){
  var instrucao = `
  SELECT espec_nome FROM especialidades WHERE fkUsuario = ${idUsuario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);

}

module.exports = {
  conquistar,
  remover,
  listarEspec
};