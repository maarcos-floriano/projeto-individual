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
    return false;
  } else if (senha !== confirmSenha) {
    alert("As senhas não coincidem.");
    return false;
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
function validarRegistro(registroVar) {
  const styleRegistro = document.getElementById("ipt_registro");

  if (registroVar < 6) {
    styleRegistro.style.borderBottom = "2px solid red";
    alert("Registro invalido");
    return false;
  } else {
    styleRegistro.style.borderBottom = "1px solid black";
    return true;
  }
}

function listar() {
  fetch("/patrulhas/listar", {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((patrulhas) => {
        patrulhas.forEach((patrulhas) => {
          slct_patrulha.innerHTML += `<option value='${patrulhas.id}'>${patrulhas.ptr_nome}</option>`;
        });
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}

function enviarCredenciais() {
  var emailVar = ipt_email.value;
  var senhaVar = ipt_senha.value;
  var confirmSenhaVar = ipt_confirmSenha.value;
  var nomeVar = ipt_nome.value;
  var registroVar = ipt_registro.value;
  var patrulhaVar = slct_patrulha.value


  if (
    validarEmail(emailVar) &&
    validarSenha(senhaVar, confirmSenhaVar) &&
    validarNome(nomeVar) &&
    validarRegistro(registroVar)
  ) {
    window.location.href = "./sobre.html";
  }

  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      nomeServer: nomeVar,
      emailServer: emailVar,
      senhaServer: senhaVar,
      patrulhaServer: patrulhaVar,
      registroServer: registroVar
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        cardErro.style.display = "block";

        mensagem_erro.innerHTML =
          "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

        setTimeout(() => {
          window.location = "login.html";
        }, "2000");

        limparFormulario();
        finalizarAguardar();
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      finalizarAguardar();
    });

  return false;
}
