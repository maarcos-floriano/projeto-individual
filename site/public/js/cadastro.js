function validarEmail(email) {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailStyle = document.getElementById("ipt_email");
  if (!regexEmail.test(email)) {
    emailStyle.style.borderBottom = "2px solid red";
  } else {
    emailStyle.style.borderBottom = "1px solid black";
    return true;
  }
}
function validarSenha(senha, confirmSenha) {
  const senhaStyle = document.getElementById("ipt_senha");

  if (
    senha.length < 8 ||
    !/[A-Z]/.test(senha) ||
    !/[a-z]/.test(senha) ||
    !/[0-9]/.test(senha) ||
    !/[$@$!%*?&]/.test(senha)
  ) {
    alert("Senha fraca");
    senhaStyle.style.borderBottom = "2px solid red";
  } else if (senha !== confirmSenha) {
    alert("As senhas não coincidem.");
  } else {
    senhaStyle.style.borderBottom = "1px solid black";
    return true;
  }
}

function preenchimentoSenha() {
  var senha = ipt_senha.value;
  const preenchimento = document.querySelector(".preenchimento");
  if (senha == "") {
    preenchimento.style.width = "10%";
    preenchimento.style.backgroundColor = "red";
    titulo_senha.innerHTML = "Fraco";
  }
  if (senha.length >= 8) {
    preenchimento.style.width = "30%";
    titulo_senha.innerHTML = "Fraco";
    if (/[A-Z]/.test(senha) && /[0-9]/.test(senha)) {
      preenchimento.style.width = "50%";
      preenchimento.style.backgroundColor = "yellow";
      titulo_senha.innerHTML = "Forte";
      if (/[$@$!%*?&]/.test(senha)) {
        preenchimento.style.width = "80%";
        preenchimento.style.backgroundColor = "yellow";
        titulo_senha.innerHTML = "Forte";
        if (
          senha.length > 8 &&
          /[A-Z]/.test(senha) &&
          /[a-z]/.test(senha) &&
          /[0-9]/.test(senha) &&
          /[$@$!%*?&]/.test(senha)
        ) {
          preenchimento.style.width = "100%";
          preenchimento.style.backgroundColor = "green";
          titulo_senha.innerHTML = "Muito Forte";
        }
      }
    }
  }
}

function validarNome(nome) {
  const nomeStyle = document.getElementById("ipt_nome");
  if (nome.trim() === "") {
    nomeStyle.style.borderBottom = "2px solid red";
  } else {
    nomeStyle.style.borderBottom = "1px solid black";
    return true;
  }
}

function enviarCredenciais() {
  var email = ipt_email.value;
  var senha = ipt_senha.value;
  var confirmSenha = ipt_confirmSenha.value;
  var nome = ipt_nome.value;
  // validarEmail(email);
  // validarCep(cep);
  // validarTelefone(telefone);
  // validarNome(nome);
  if (
    validarEmail(email) &&
    validarSenha(senha, confirmSenha) &&
    validarNome(nome)
  ) {
    window.location.href = "../html/sobre.html";
  }
}
