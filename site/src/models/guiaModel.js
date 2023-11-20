var database = require("../database/config");

function listar(idUsuario) {
  var instrucao = `select guia_nome from guia where fkUsuario = ${idUsuario};`;
  console.log("Executando " + instrucao);
  return database.executar(instrucao);
}

function conquistar(guia_nome, idUsuario) {
  var instrucao = `insert into guia (guia_nome, fkUsuario) values 
    ("${guia_nome}", ${idUsuario});`;
  console.log("Executando " + instrucao);
  return database.executar(instrucao);
}

function remover(guia_nome, idUsuario) {
    var instrucao = `delete from guia where guia_nome = "${guia_nome}" and fkUsuario = ${idUsuario};`;
    console.log("Executando " + instrucao);
    return database.executar(instrucao);
}

module.exports = {
  listar,
  conquistar,
  remover
};
