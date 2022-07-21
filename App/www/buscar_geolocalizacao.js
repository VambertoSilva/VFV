function buscaOrdensNaAPI() {
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
  let cont = 0;

  timer = setInterval(() => {
    document.getElementById("geolocalizacao").style.display = "none";
    currView = "pgPrincipal";
    document.getElementById("pgPrincipal").style.display = "block";
    cont++;
    clearInterval(timer);
  }, 1000);
}

buscaOrdensNaAPI();
