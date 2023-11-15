const monitorEspecialidades = document.getElementById("tela_especialidades");
const monitorDashboard = document.getElementById("tela_dashboard");
const monitorGuia = document.getElementById("tela_guia");

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
        }
      }
    }
  } else if (menu == 3) {
    verificarEspecialidades();
    idSelect.value = -1;
    barra_progresso.value = listaCheckEspec.length * 2;
    // location.reload()
  }
}

let listaCheckEspec = [];

function verificarEspecialidades() {
  var idUsuario = sessionStorage.ID_USUARIO;
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
      }
    }
  });

  return console.log(`${idUsuario} Sua lista: ${listaCheckEspec.join(", ")}`);
}

function updateEspecialidades(){
  var idUsuario = sessionStorage.ID_USUARIO;

  fetch("/usuario/listar/")
}

function trocaDeTela(tela) {
  var monitores = [monitorEspecialidades, monitorDashboard, monitorGuia];

  for (var i = 0; i < monitores.length; i++) {
    if (tela == 0) {
      monitores[0].style.display = "flex";
      monitores[1].style.display = "none";
      monitores[2].style.display = "none";
    } else if (tela == 1) {
      monitores[0].style.display = "none";
      monitores[1].style.display = "flex";
      monitores[2].style.display = "none";
    } else {
      monitores[0].style.display = "none";
      monitores[1].style.display = "none";
      monitores[2].style.display = "flex";
    }
  }
}
