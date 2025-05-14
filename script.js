validarLogin = () => {
  let usuario = document.getElementById("emailDeLogin").value;
  let senha = document.getElementById("senhaDeLogin").value;

  if (usuario == "admin" && senha == "123456") {
    alert("Login realizado com sucesso!");
  } else {
    alert("Usuário ou senha inválidos!");
  }
};
