var database = require("../database/config");

function listar(idUsuario) {
  var instrucao = `select insignia_desc from insignia where fkUsuario = ${idUsuario};`;
  console.log("Executando " + instrucao);
  return database.executar(instrucao);
}

function conquistar(insignia_desc, idUsuario) {
  var instrucao = `insert into insignia (insignia_desc, fkUsuario) values 
    ("${insignia_desc}", ${idUsuario});`;
  console.log("Executando " + instrucao);
  return database.executar(instrucao);
}

function remover(insignia_desc, idUsuario) {
    var instrucao = `delete from insignia where insignia_desc = "${insignia_desc}" and fkUsuario = ${idUsuario};`;
    console.log("Executando " + instrucao);
    return database.executar(instrucao);
}

module.exports = {
  listar,
  conquistar,
  remover
};
