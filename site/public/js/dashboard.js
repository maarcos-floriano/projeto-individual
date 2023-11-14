const monitorEspecialidades = document.getElementById("tela_especialidades");
const monitorDashboard = document.getElementById("tela_dashboard");
const monitorGuia = document.getElementById("tela_guia");

function maisOpcoes() {
  var menu = Number(menuSelect.value);
  var direcionamentos = [
    "../sobre",
    "mail.to/marcos.floriano@sptech.school",
    "../login",
  ];
  for (var i = 0; i < 4; i++) {
    if (menu == i) window.open(direcionamentos[i], "_blank");
  }
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
