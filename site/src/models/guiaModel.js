var database = require("../database/config");

function buscarAtividadesFeitas(fkUsuario){

    //criação da varial que guardara a instrução que passaremos para o meu database
    var instrucaoSql = '';

    //Verificamos em qual ambiente esta nossa rodando nossa  aplicação
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        console.log('Voce esta usando um AMBIENTE NAO ConFIGURADO')
    }else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        select * from atividadesGuia where fkUsuaio = ${fkUsuario};
        `
    }else {
        //Esse else serve caso não seja detectado nenhum ambiente
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    
    //Após as validações, mostra qual a instrução esta sendo enviada para o banco de dados
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarAtividadesFeitas
}