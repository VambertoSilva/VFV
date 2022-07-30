function buscarGeolocalizacaoShow() {
  document.querySelector(".menuBar").style.display = "none";

  //trocarTela("geolocalizaao");

  navigator.geolocation.getCurrentPosition(
    onGeolocationSuccess,
    onGeolocationError,
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function onGeolocationError(position) {
  console.log(position);
  //trocarTela();
  //alerta("ATENÇÃO !!!", "GPS desabilitado.", null);
}

function onGeolocationSuccess(position) {
  console.log(position);
  show_Principal();
}
/*
function trocarTela() {
  setTimeout(() => {
    document.getElementById("geolocalizacao").style.display = "none";
    currView = "pgPrincipal";
    document.getElementById("pgPrincipal").style.display = "block";
  }, 1000);
}
*/
