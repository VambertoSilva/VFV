function buscaOrdensNaAPI() {
  setTimeout(() => {
    navigator.geolocation.getCurrentPosition(
      onGeolocationSuccess,
      onGeolocationError,
      { enableHighAccuracy: true, timeout: 10000 }
    );
    navigator.geolocation.getCurrentPosition(
      onGeolocationSuccess,
      onGeolocationError,
      { enableHighAccuracy: true, timeout: 10000 }
    );
    console.log("rodou");
  }, 1000);
}

function onGeolocationError(position) {
  console.log("oi22");
  console.log(position);
  alerta("ATENÇÃO !!!", "GPS desabilitado.", null);
}

function onGeolocationSuccess(position) {
  console.log(position);
  console.log("oi");

  trocarTela();
}

function trocarTela() {
  setTimeout(() => {
    document.getElementById("geolocalizacao").style.display = "none";
    currView = "pgPrincipal";
    document.getElementById("pgPrincipal").style.display = "block";
  }, 1000);
}

buscaOrdensNaAPI();
