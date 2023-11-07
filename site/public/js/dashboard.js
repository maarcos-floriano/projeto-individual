function telaEspecialidades(){
    document.getElementById('tela_especialidades').style.display = 'flex';
    document.getElementById('tela_dashboard').style.display = 'none';
    document.getElementById('tela_guia').style.display = 'none';
}
function telaDashboard() {
    document.getElementById('tela_dashboard').style.display = 'flex';
    document.getElementById('tela_especialidades').style.display = 'none';
    document.getElementById('tela_guia').style.display = 'none';
}
function telaGuia(){
    document.getElementById('tela_guia').style.display = 'flex';
    document.getElementById('tela_dashboard').style.display = 'none';
    document.getElementById('tela_especialidades').style.display = 'none';
}