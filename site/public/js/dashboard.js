const monitorEspecialidades = document.getElementById("tela_especialidades");
const monitorDashboard = document.getElementById("tela_dashboard");
const monitorGuia = document.getElementById("tela_guia");
const monitorInsignia = document.getElementById("tela_insignia");

window.onload = atualizarEspecialidades(), atualizarAtividade();

function maisOpcoes(idSelect) {
  var menu = Number(idSelect.value);
  var direcionamentos = [
    "../sobre.html",
    "http://mail.to/marcos.floriano@sptech.school",
    "../login.html",
  ];
  if (menu < 3) {
    for (var i = 0; i < 4; i++) {
      if (menu == i) {
        if (i != 2) {
          window.open(direcionamentos[i], "_blank");
          idSelect.value = -1;
        } else {
          window.location.assign(direcionamentos[i]);
          idSelect.value = -1;
          sessionStorage.clear();
        }
      }
    }
  } else if (menu == 3) {
    barra_progresso.value = 0;
    verificarEspecialidades();
    verificarAtividades();
    verificarInsignias();
    idSelect.value = -1;
    barra_progresso.value += listaCheckAtiv.length * 2;
    barra_progresso.value += listaCheckEspec.length * 2;

    // location.reload()
  }
}

let listaCheckEspec = [];
let listaNoCheckEspec = [];
let idUsuario = sessionStorage.ID_USUARIO;

function verificarEspecialidades() {
  let especialidades = document.querySelectorAll(
    '.itens input[type="checkbox"]'
  );

  especialidades.forEach(function (checkbox) {
    if (checkbox.checked) {
      var especExiste = listaCheckEspec.indexOf(checkbox.name);
      if (especExiste == -1) {
        listaCheckEspec.push(checkbox.name);
      }
    } else {
      var index = listaCheckEspec.indexOf(checkbox.name);

      if (index != -1) {
        listaCheckEspec.splice(index, 1);

        if (checkbox.name != "") {
          listaNoCheckEspec.push(checkbox.name);
        }
        return removerEspecialides();
      }
    }
  });
  return updateEspecialidades();
}

let listaCheckAtiv = [];
let listaNoCheckAtiv = [];

function verificarAtividades() {
  let atividades = document.querySelectorAll(
    '#atividadesGuia input[type="checkbox"]'
  );

  atividades.forEach(function (checkbox) {
    if (checkbox.checked) {
      var ativExiste = listaCheckAtiv.indexOf(checkbox.name);
      if (ativExiste == -1) {
        listaCheckAtiv.push(checkbox.name);
      }
    } else {
      var index = listaCheckAtiv.indexOf(checkbox.name);

      if (index != -1) {
        listaCheckAtiv.splice(index, 1);

        if (checkbox.name != "") {
          listaNoCheckAtiv.push(checkbox.name);

          return removerAtividades();
        }
      }

      return updateAtividades();
    }
  });
}

listaCheckInsignia = [];
listaNoCheckInsignia = [];

function verificarInsignias(){
  let insignia = document.querySelectorAll(
    '.pergunta input[type="checkbox"]'
  );

  insignia.forEach(function (checkbox) {
    if (checkbox.checked) {
      var insigniaExiste = listaCheckInsignia.indexOf(checkbox.name);
      if (insigniaExiste == -1) {
        listaCheckInsignia.push(checkbox.name);
      }
    } else {
      var index = listaCheckInsignia.indexOf(checkbox.name);

      if (index != -1) {
        listaCheckInsignia.splice(index, 1);

        if (checkbox.name != "") {
          listaNoCheckInsignia.push(checkbox.name);

          return removerinsignia();
        }
      }

      return updateInsignia();
    }
  });
}

function updateEspecialidades() {
  var idUsuario = sessionStorage.ID_USUARIO;

  fetch(`/especialidade/conquistar/${idUsuario}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      espec_nome: listaCheckEspec,
      espec_modalidade: "especialidade",
      espec_possui: 1,
      idUsuario: idUsuario,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        console.log(
          "Post de Especialidades realizado com sucesso pelo usuario de ID: " + idUsuario + "!"
        );
        // window.location = "/dashboard/mural.html";
        // limparFormulario();
        // finalizarAguardar();
      } else if (resposta.status == 404) {
        window.alert("Deu 404!");
      } else {
        throw (
          "Houve um erro ao tentar realizar a postagem! Código da resposta: " +
          resposta.status
        );
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
}
function removerEspecialides() {
  var idUsuario = sessionStorage.ID_USUARIO;

  fetch(`/especialidade/remover/${idUsuario}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      especNo_nome: listaNoCheckEspec,
      espec_modalidade: "especialidade",
      espec_possui: 1,
      idUsuario: idUsuario,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        console.log(
          "Post de remover Especialidades realizado com sucesso pelo usuario de ID: " + idUsuario + "!"
        );
        // window.location = "/dashboard/mural.html";
        // limparFormulario();
        // finalizarAguardar();
      } else if (resposta.status == 404) {
        window.alert("Deu 404!");
      } else {
        throw (
          "Houve um erro ao tentar realizar a postagem! Código da resposta: " +
          resposta.status
        );
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
}

function updateAtividades() {
  var idUsuario = sessionStorage.ID_USUARIO;

  fetch(`/guia/conquistar/${idUsuario}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      guia_nome: listaCheckAtiv,
      idUsuario: idUsuario,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        console.log(
          "Post de Atividades realizado com sucesso pelo usuario de ID: " + idUsuario + "!"
        );
        // window.location = "/dashboard/mural.html";
        // limparFormulario();
        // finalizarAguardar();
      } else if (resposta.status == 404) {
        window.alert("Deu 404!");
      } else {
        throw (
          "Houve um erro ao tentar realizar a postagem! Código da resposta: " +
          resposta.status
        );
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
}

function removerAtividades() {
  var idUsuario = sessionStorage.ID_USUARIO;

  fetch(`/guia/remover/${idUsuario}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      guiaNo_nome: listaNoCheckAtiv,
      idUsuario: idUsuario,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        console.log(
          "Post de remover Atividades realizado com sucesso pelo usuario de ID: " + idUsuario + "!"
        );
        // window.location = "/dashboard/mural.html";
        // limparFormulario();
        // finalizarAguardar();
      } else if (resposta.status == 404) {
        window.alert("Deu 404!");
      } else {
        throw (
          "Houve um erro ao tentar realizar a postagem! Código da resposta: " +
          resposta.status
        );
      }
    }
    )
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
}

function trocaDeTela(tela) {
  var monitores = [monitorEspecialidades, monitorDashboard, monitorGuia, monitorInsignia];

  for (var i = 0; i < monitores.length; i++) {
    if (tela == 0) {
      monitores[0].style.display = "flex";
      monitores[1].style.display = "none";
      monitores[2].style.display = "none";
      monitores[3].style.display = "none";
    } else if (tela == 1) {
      monitores[0].style.display = "none";
      monitores[1].style.display = "flex";
      monitores[2].style.display = "none";
      monitores[3].style.display = "none";
    } else if (tela == 2) {
      monitores[0].style.display = "none";
      monitores[1].style.display = "none";
      monitores[2].style.display = "flex";
      monitores[3].style.display = "none";
    }else{
      monitores[0].style.display = "none";
      monitores[1].style.display = "none";
      monitores[2].style.display = "none";
      monitores[3].style.display = "flex";
    }
  }
}

function atualizarEspecialidades(){
  var idUsuario = sessionStorage.ID_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;
  b_usuario.innerHTML = nome.toUpperCase();

  fetch(`/especialidade/listarEspec/${idUsuario}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        console.log(
          "Post realizado com sucesso pelo usuario de ID: " + idUsuario + "!"
        );
        resposta.json().then(json => {

          for(var i=0; i<json.length; i++){
            var checkbox = document.querySelector(`input[name="${json[i].espec_nome}"]`);
            checkbox.checked = true;

            listaCheckEspec.push(json[i].espec_nome);
          }
          barra_progresso.value += listaCheckEspec.length * 2;
      });
      } else if (resposta.status == 404) {
        window.alert("Deu 404!");
      } else {
        throw (
          "Houve um erro ao tentar realizar a postagem! Código da resposta: " +
          resposta.status
        );
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
}

function atualizarAtividade(){
  var idUsuario = sessionStorage.ID_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;
  b_usuario.innerHTML = nome.toUpperCase();

  fetch(`/guia/listar/${idUsuario}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        console.log(
          "Post realizado com sucesso pelo usuario de ID: " + idUsuario + "!"
        );
        resposta.json().then(json => {

          for(var i=0; i<json.length; i++){
            var checkbox = document.querySelector(`input[name="${json[i].guia_nome}"]`);
            checkbox.checked = true;

            listaCheckAtiv.push(json[i].guia_nome);
          }
          barra_progresso.value += listaCheckAtiv.length * 2;
      });
      } else if (resposta.status == 404) {
        window.alert("Deu 404!");
      } else {
        throw (
          "Houve um erro ao tentar realizar a postagem! Código da resposta: " +
          resposta.status
        );
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
}

function updateInsignia(){
  var idUsuario = sessionStorage.ID_USUARIO;

  fetch(`/insignia/conquistar/${idUsuario}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      insignia_desc: listaCheckInsignia,
      idUsuario: idUsuario,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        console.log(
          "Post de Atividades realizado com sucesso pelo usuario de ID: " + idUsuario + "!"
        );
        // window.location = "/dashboard/mural.html";
        // limparFormulario();
        // finalizarAguardar();
      } else if (resposta.status == 404) {
        window.alert("Deu 404!");
      } else {
        throw (
          "Houve um erro ao tentar realizar a postagem! Código da resposta: " +
          resposta.status
        );
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
}