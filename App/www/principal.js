let mdstatus = false;
const sidebar = document.getElementById("sideBar");

function close_SideBar() {
  if (mdstatus) {
    sidebar.style.display = "none";
  }
}

function show_SideBar() {
  console.log(sidebar);
  sidebar.style.display = "block";
  mdstatus = true;
  console.log(sidebar.style.display);
}

function btnHome() {
  close_SideBar();
  trocaTela("principal");
}

function show_InserirAnuncio() {
  trocaTela("inserirAnuncios");
}

function show_MeusAnuncios() {
  trocaTela("pgMeusAnuncios");
}
