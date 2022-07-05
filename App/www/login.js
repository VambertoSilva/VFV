let = currView;

function trocaTela(tela) {
  document.getElementById(currView).style.display = "none";
  currView = tela;
  document.getElementById(currView).style.display = "block";
}

currView = "login";

function ShowCadastro() {
  trocaTela("pagecadastro");
}

function ShowPrincipal() {
  trocaTela("Principal");
}
