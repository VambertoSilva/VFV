function buscaOrdensNaAPI() {
  msgGeolocDetect.style.visibility = "visible";
  navigator.geolocation.getCurrentPosition(
    onGeolocationSuccess,
    onGeolocationError,
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function onGeolocationError() {
  alerta("ATENÇÃO !!!", "GPS desabilitado.", null);
}

function onGeolocationSuccess(position) {}
