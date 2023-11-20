var database = require("../database/config");

function listar(idUsuario) {
    var instrucao = `select nome from guia where fkUsuario = ${idUsuario};`;
    console.log("Executando " + instrucao);
    return database.executar(instrucao);
}

function conquistar(nomeGuia, idUsuario) {
    var instrucao = `insert into guia (nome, fkUsuario) values 
    ("${nomeGuia}", ${idUsuario});`;
    console.log("Executando " + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    conquistar
};