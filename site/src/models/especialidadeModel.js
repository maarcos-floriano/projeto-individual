var database = require("../database/config");

function listar() {
  var instrucao = `
        select espec_nome as Possui from especialidades where espec_possui = true AND fkUsuario = 100;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
function cadastrar(nomeEspec, modalidadeEspec, checkEspec, idUsuario) {
  var instrucao = `
    insert into especialidades(espec_nome, espec_modalidade, espec_possui, fkUsuario) values
    ("${nomeEspec}", "${modalidadeEspec}", ${checkEspec}, ${idUsuario});
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};