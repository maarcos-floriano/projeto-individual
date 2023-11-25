const monitorEspecialidades = document.getElementById("tela_especialidades");
const monitorDashboard = document.getElementById("tela_dashboard");
const monitorGuia = document.getElementById("tela_guia");
const monitorInsignia = document.getElementById("tela_insignia");
const carregando = document.getElementById("carregando");

window.onload = atualizar();

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
    carregando.style.display = "flex";
    setTimeout(function () {
    window.location.reload();
    }, 1500);
  }
}

let listaCheckEspec = [];
let listaNoCheckEspec = [];

function verificarEspecialidades() {
  let especialidades = document.querySelectorAll(
    '.itens input[type="checkbox"]'
  );

  especialidades.forEach(function (checkbox) {
    if (checkbox.checked) {
      console.log('nejhibdnhui',checkbox.value);
      var especExiste = listaCheckEspec.indexOf(checkbox.name);
      if (especExiste == -1) {
        listaCheckEspec.push({
          nome: checkbox.name,
          modalidade: checkbox.value
        }  );
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

var listaCheckAtiv = [];
var listaNoCheckAtiv = [];

function verificarAtividades() {
  let atividades = document.querySelectorAll(
    '#atividadesGuia input[type="checkbox"]'
  );
  listaCheckAtiv = [];

  atividades.forEach(function (checkbox) {
    if (checkbox.checked) {
      listaCheckAtiv.push(checkbox.name);
    } else {
      listaNoCheckAtiv.push(checkbox.name);
      return removerAtividades();
    }
    return updateAtividades();
  });
}

listaCheckInsignia = [];
listaNoCheckInsignia = [];

function verificarInsignias() {
  let insignias = document.querySelectorAll('.pergunta .respostas input[type="checkbox"]');

  listaCheckInsignia = [];

  insignias.forEach(function (checkbox) {
    if (checkbox.checked) {
      listaCheckInsignia.push(checkbox.name);
    } else {
      listaNoCheckInsignia.push(checkbox.name);
      return removerinsignia();
    }
  });
  return updateInsignia();
}

function updateEspecialidades() {
  var idUsuario = sessionStorage.ID_USUARIO;

  console.log("aqui esta o OBJETO",listaCheckEspec);

  fetch(`/especialidade/conquistar/${idUsuario}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      espec: listaCheckEspec,
      espec_possui: 1,
      idUsuario: idUsuario,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        console.log(
          "Post de Especialidades realizado com sucesso pelo usuario de ID: " +
            idUsuario +
            "!"
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
          "Post de remover Especialidades realizado com sucesso pelo usuario de ID: " +
            idUsuario +
            "!"
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
          "Post de Atividades realizado com sucesso pelo usuario de ID: " +
            idUsuario +
            "!"
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

  // setTimeout(function () {
  //   window.location.reload();
  // }, 1000);
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
          "Post de remover Atividades realizado com sucesso pelo usuario de ID: " +
            idUsuario +
            "!"
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

function trocaDeTela(tela) {
  var monitores = [
    monitorEspecialidades,
    monitorDashboard,
    monitorGuia,
    monitorInsignia,
  ];

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
    } else {
      monitores[0].style.display = "none";
      monitores[1].style.display = "none";
      monitores[2].style.display = "none";
      monitores[3].style.display = "flex";
    }
  }
}

function atualizarEspecialidades() {
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
        resposta.json().then((json) => {
          for (var i = 0; i < json.length; i++) {
            var checkbox = document.querySelector(
              `input[name="${json[i].espec_nome}"]`
            );
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

function atualizarAtividade() {
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
        resposta.json().then((json) => {
          for (var i = 0; i <= json.length; i++) {
            var checkbox = document.querySelector(
              `input[name="${json[i].guia_nome}"]`
            );
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

function updateInsignia() {
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
          "Post de Atividades realizado com sucesso pelo usuario de ID: " +
            idUsuario +
            "!"
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

function removerinsignia() {
  var idUsuario = sessionStorage.ID_USUARIO;

  fetch(`/insignia/remover/${idUsuario}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      insigniaNo_desc: listaNoCheckInsignia,
      idUsuario: idUsuario,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        console.log(
          "Post de remover Insiginias realizado com sucesso pelo usuario de ID: " +
            idUsuario +
            "!"
        );
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

function atualizarInsignia() {
  var idUsuario = sessionStorage.ID_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;
  b_usuario.innerHTML = nome.toUpperCase();

  fetch(`/insignia/listar/${idUsuario}`, {
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
        resposta.json().then((json) => {
          for (var i = 0; i < json.length; i++) {
            var checkbox = document.querySelector(
              `input[name="${json[i].insignia_desc}"]`
            );
            checkbox.checked = true;

            listaCheckInsignia.push(json[i].insignia_desc);
          }
          barra_progresso.value += listaCheckInsignia.length * 2;
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

function atualizar() {
  atualizarEspecialidades();
  atualizarAtividade();
  atualizarInsignia();
}
