// PALAVRAS RESERVADAS
var acentos = ["á", "é", "í", "ó", "ú", "õ", "ã", "ô", "ê", "ç"];
var blockedWords = [
  "null",
  "not",
  "script",
  "drop",
  "exec",
  "true",
  "cú",
  "cu",
  "viado",
  "veado",
  "buceta",
  "bucetinha",
  "xota",
  "xoxota",
  "xoxotinha",
  "xereca",
  "xerequinha",
];
var blockedChars = ["=", "<", ">", "%", "&", "*"];

var currView = "";

/////////////////////////

var plAngle = 20;
var toastExibida = false;
var timerRotacao = null;

var promptResult = "";

function trocaTela(tela) {
  document.getElementById(currView).style.display = "none";
  currView = tela;
  document.getElementById(currView).style.display = "block";
}

function hideAppBar() {
  appBar.style.display = "none";
}

function configAppBarBasics(title, back) {
  appBarTitleText.innerHTML = title;

  if (back == "showBackButton") {
    appBarLeftButton.style.display = "block";
  } else {
    appBarLeftButton.style.display = "none";
    appBarLeftButton.style.width = "0%";
  }

  appBarButton1.style.display = "none";
  appBarButton1.style.width = "0%";
  appBarButton2.style.display = "none";
  appBarButton2.style.width = "0%";
  appBarButton3.style.display = "none";
  appBarButton3.style.width = "0%";
  appBarButton4.style.display = "none";
  appBarButton4.style.width = "0%";

  appBar.style.display = "block";
}

function configAppBarButton(numero, imagem, callBack) {
  document.getElementById("imgAppBarButton" + numero).src = imagem;
  document.getElementById("appBarButton" + numero).style.width = "13%";
  document.getElementById("appBarButton" + numero).style.display = "block";
  document.getElementById("appBarButton" + numero).onclick = callBack;
}

function hideSearchBar() {
  searchBar.style.display = "none";
}

function showSearchBar() {
  searchBar.style.display = "block";
  searchBarTxt.value = "";
  searchBarTxt.focus();
}

function alerta(titulo, mens, funcao) {
  if (navigator.userAgent.indexOf("Linux") == -1) {
    alert(mens);
  } else {
    navigator.notification.alert(mens, funcao, titulo);
  }
}

function confirma(mens, titulo, funcao, botoes) {
  navigator.notification.confirm(mens, funcao, titulo, botoes);
}

// function trocarTela() {
//   let sexlpld = 0;

//   hjkl = setInterval(() => {
//     document.getElementById("geolocalizacao").style.display = "none";
//     currView = "login";
//     document.getElementById("login").style.display = "block";
//     sexlpld++;
//     clearInterval(hjkl);
//   }, 1000);

function promptInput(titulo, mens, funcao) {
  gPromptInput = 0;
  if (navigator.userAgent.indexOf("Linux") == -1) {
    gPromptInput = prompt(mens, "1");
  } else {
    navigator.notification.prompt(
      mens, // message
      funcao, // callback to invoke
      titulo, // title
      ["Ok", "Sair"], // buttonLabels
      "1" // defaultText
    );
  }
}

/////////

// PRE-LOADER

function rotatePreloader() {
  preloader.style.transform = "rotate(" + plAngle + "deg)";
  plAngle += 20;
  if (plAngle > 360) plAngle = 0;
  return;
}

function hidePreloader() {
  preloader.style.display = "none";
}

function showPreloader() {
  preloader.style.display = "block";
  preloader.style.position = "fixed";
  preloader.style.top = "200px";

  larguraPreloader = preloader.offsetWidth;

  preloader.style.left = window.innerWidth / 2 - larguraPreloader / 2 + "px";

  plAngle = 20;
}

///// AJAX

var dataLoaded = false;

function doPost(url, params, successCallBack) {
  showPreloader();

  if (simulaAjax) {
    var funcao = url.substr(url.lastIndexOf("/") + 1, url.lenght);
    simulaPost(funcao, params, successCallBack);
    return;
  }

  var ajax_request = new XMLHttpRequest();
  ajax_request.onreadystatechange = function () {
    if (ajax_request.readyState == 4) {
      hidePreloader();

      switch (ajax_request.status) {
        case 200:
          successCallBack(ajax_request.responseText);
          break;
        case 400:
          alerta("ERRO !!!", "Erro 400. Por favor informe ao suporte.", null);
          break;
        case 401:
          var ms = JSON.parse(ajax_request.responseText);
          if (ms.error === "Unauthorized") {
            alerta(
              "ERRO !!!",
              "Usuário não autorizado. Verifique os dados informados. Se o problema persistir entre em contato com o suporte",
              null
            );
          } else {
            alerta("ERRO !!!", ms.message, null);
          }
          break;
        case 403:
          var ms = JSON.parse(ajax_request.responseText);
          alerta("ERRO !!!", ms.message, null);
          break;

        case 500:
          alerta("ERRO !!!", "Erro interno.Favor avisar o suporte !", null);
          break;
        default:
          alerta("ERRO !!!", "Ocorreu um erro. Verificque sua conexão !", null);
          break;
      }
    } else return;
  };

  ajax_request.open("POST", url, true);

  //ajax_request.setRequestHeader('Access-Control-Allow-Origin', '*');
  ajax_request.setRequestHeader("Authorization", gTokenApi);

  //ajax_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  ajax_request.setRequestHeader("Content-type", "application/json");

  ajax_request.send(params);
}

function doPostToken(url, params, successCallBack) {
  showPreloader();

  if (simulaAjax) {
    var funcao = url.substr(url.lastIndexOf("/") + 1, url.lenght);
    simulaPost(funcao, params, successCallBack);
    return;
  }

  var ajax_request = new XMLHttpRequest();
  ajax_request.onreadystatechange = function () {
    if (ajax_request.readyState == 4) {
      hidePreloader();

      switch (ajax_request.status) {
        case 200:
          successCallBack(ajax_request.responseText);
          break;
        case 400:
          alerta("ERRO !!!", "Erro 400. Por favor informe ao suporte.", null);
          break;
        case 401:
          var ms = JSON.parse(ajax_request.responseText);
          if (ms.error === "Unauthorized") {
            alerta(
              "ERRO !!!",
              "Usuário não autorizado. Verifique os dados informados. Se o problema persistir entre em contato com o suporte",
              null
            );
          } else {
            alerta("ERRO !!!", ms.message, null);
          }
          break;
        case 403:
          var ms = JSON.parse(ajax_request.responseText);
          alerta("ERRO !!!", ms.message, null);
          break;

        case 500:
          alerta("ERRO !!!", "Erro interno.Favor avisar o suporte !", null);
          break;
        default:
          alerta("ERRO !!!", "Ocorreu um erro. Verificque sua conexão !", null);
          break;
      }
    } else return;
  };

  ajax_request.open("POST", url, true);

  ajax_request.setRequestHeader("Access-Control-Allow-Origin", "*");
  //ajax_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  ajax_request.setRequestHeader(
    "Authorization",
    gTokenApi.replace("Bearing", "")
  );

  ajax_request.setRequestHeader("Content-type", "application/JSON");

  ajax_request.send(params);
}

function doGet(url, successCallBack) {
  showPreloader();

  if (simulaAjax) {
    var funcao = url.substr(url.lastIndexOf("/") + 1, url.lenght);
    simulaGet(funcao, successCallBack);
    return;
  }

  var ajax_request = new XMLHttpRequest();
  //var ajax_request = new XDomainRequest();

  ajax_request.onreadystatechange = function () {
    if (ajax_request.readyState == 4) {
      hidePreloader();

      switch (ajax_request.status) {
        case 200:
          successCallBack(ajax_request.responseText);
          break;
        case 400:
          alerta("ERRO !!!", "Erro 400. Por favor informe ao suporte.", null);
          break;
        case 401:
          var ms = JSON.parse(ajax_request.responseText);
          if (ms.error === "Unauthorized") {
            alerta(
              "ERRO !!!",
              "Usuário não autorizado. Verifique os dados informados. Se o problema persistir entre em contato com o suporte",
              null
            );
          } else {
            alerta("ERRO !!!", ms.message, null);
          }
          break;
        case 403:
          var ms = JSON.parse(ajax_request.responseText);
          alerta("ERRO !!!", ms.message, null);
          break;

        case 500:
          alerta("ERRO !!!", "Erro interno.Favor avisar o suporte !", null);
          break;
        default:
          alerta("ERRO !!!", "Ocorreu um erro. Verifique sua conexão !", null);
          break;
      }
    } else return;
  };

  ajax_request.open("GET", url, true);
  ajax_request.setRequestHeader("Access-Control-Allow-Origin", "*");
  ajax_request.setRequestHeader("Authorization", gTokenApi);
  //    ajax_request.setRequestHeader('Access-Control-Allow-Origin', '*');

  ajax_request.send(null);

  //ajax_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
}

function doGetSync(url, successCallBack) {
  showPreloader();

  if (simulaAjax) {
    var funcao = url.substr(url.lastIndexOf("/") + 1, url.lenght);
    simulaGet(funcao, successCallBack);
    return;
  }

  var ajax_request = new XMLHttpRequest();
  ajax_request.onreadystatechange = function () {
    if (ajax_request.readyState == 4) {
      if (ajax_request.status == 200) {
        hidePreloader();
        successCallBack(ajax_request.responseText);
        return;
      }
    } else {
      hidePreloader();
      return;
    }
  };

  ajax_request.setRequestHeader("Authorization", gTokenApi);

  ajax_request.open("GET", url, false);
  ajax_request.send(null);
}

function settings() {
  if (loginDone) {
    window.location.href = "configs.html";
  } else {
    showToast("Favor realizar login!", 2000);
  }
}

// GENERICAS

function verificaAcentuacao(frase) {
  for (var i = 0; i <= acentos.length - 1; i++) {
    if (frase.indexOf(acentos[i]) != -1) return true;
    if (frase.indexOf(acentos[i].toUpperCase()) != -1) return true;
  }
  return false;
}

function verificaCarBloqueados(frase) {
  for (var i = 0; i <= blockedChars.length - 1; i++) {
    if (frase.indexOf(blockedChars[i]) != -1) return true;
  }

  return false;
}

function verificaPalavrasProibidas(frase) {
  for (var i = 0; i <= blockedWords.length - 1; i++) {
    if (frase.indexOf(blockedWords[i]) != -1) return true;
    if (frase.indexOf(blockedWords[i].toUpperCase()) != -1) return true;
  }

  return false;
}

function formata_data(dataDes) {
  dt = new Date(dataDes);
  var d = dt.getDate();
  if (d.length < 2) d = "0" + d;
  var m = dt.getMonth() + 1;
  if (m.length < 2) m = "0" + m;
  var a = dt.getFullYear();
  var h = dt.getHours();
  if (h.length < 2) h = "0" + h;
  var n = dt.getMinutes();
  if (n.length < 2) n = "0" + n;
  res = d + "/" + m + "/" + a + " " + h + ":" + n;

  return res;
}

// CRIPTOGRAFIA
function Encripta(dados) {
  var mensx = "";
  var alf = ["BYCADEZFGH", "IJKLMNOPQR"];
  var seq = [
    ["A", "N", "H", "#", "U", "%", "6", "7", "?", "}"],
    ["F", "G", "T", "Y", "N", "D", "G", "I", "O", "<"],
    ["1", "6", "3", "Q", "@", "#", "<", "=", "+", "-"],
    ["n", "h", "d", "g", "f", "u", "%", "$", "&", "p"],
    ["J", "d", "w", "#", "7", "8", "6", "5", "d", "g"],
    ["k", "l", "m", "n", "#", "o", "p", "q", "r", "s"],
    ["a", "b", "c", "d", "!", "e", "f", "g", "h", "i"],
    ["A", "B", "C", "D", "&", "E", "F", "G", "H", "I"],
    ["J", "d", "w", "#", "7", "8", "6", "5", "d", "g"],
    ["J", "d", "w", "#", "7", "8", "6", "5", "d", "g"],
  ];

  var data = new Date();
  var seg = data.getSeconds();
  var seg2 = seg.toString();
  var digSeg = parseInt(seg2.substr(0, 1));
  if (seg2.length > 1) {
    digSeg = parseInt(seg2.substr(1, 1));
  }

  var tamNomePac = user.PAC_NOME_PACIENTE.length;
  if (tamNomePac > 20) var alfInd = 1;
  else var alfInd = 0;

  var ultLetNom = user.PAC_NOME_PACIENTE.substr(
    user.PAC_NOME_PACIENTE.length - 1,
    1
  );
  var ultDigCPF = parseInt(user.PDOC_NUMERO.substr(10, 1));

  mensx = alf[alfInd].substr(digSeg, 1) + alf[alfInd].substr(ultDigCPF, 1);

  for (i = 0; i <= dados.length - 1; i++) {
    car = Asc(dados.substr(i, 1));
    carAux = car + digSeg + (i + 1) * 2;
    caraux2 = carAux.toString();
    num = parseInt(user.PDOC_NUMERO.substr(i, 1));
    mensx =
      mensx +
      seq[num][parseInt(caraux2.substr(0, 1))] +
      seq[num + 1][parseInt(caraux2.substr(1, 1))];
  }

  car = Asc(ultLetNom);
  caraux2 = car.toString();

  mensx = mensx + caraux2;

  return mensx;
}

function Descripta(dados) {
  var mensx = "";

  var chave1 = parseInt(cadtxtCPF.value.substr(13, 1));
  var chave = "";

  chave = chave1 + 2;

  digitado = dados.substr(0, 6) + dados.substr(8, dados.length);

  for (i = 0; i <= digitado.length / 2 - 1; i++) {
    var aux = parseInt(digitado.substr(i, 2));

    mensx = mensx + String.fromCharCode(aux - (chave - i));
  }

  return mensx;
}

function Asc(t) {
  return t.charCodeAt(0);
}

function Chr(AsciiNum) {
  return String.fromCharCode(AsciiNum);
}

// EVENTO DE INTERCEPTAÇÃO DE ERRO EM JAVASCRIPT

window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
  alert(
    "Error: " +
      errorMsg +
      " Script: " +
      url +
      " Line: " +
      lineNumber +
      " Column: " +
      column +
      " StackTrace: " +
      errorObj
  );
};

function FormatarCPF(cpf) {
  //var ao_cpf = document.forms.form1.ao_cpf.value;
  var ao_cpf = cpf;
  var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;
  if (cpfValido.test(ao_cpf) == false) {
    ao_cpf = ao_cpf.replace(/\D/g, ""); //Remove tudo o que não é dígito

    if (ao_cpf.length == 11) {
      ao_cpf = ao_cpf.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
      ao_cpf = ao_cpf.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
      //de novo (para o segundo bloco de números)
      ao_cpf = ao_cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos

      //var valorValido = document.getElementById("ao_cpf").value = ao_cpf;
      var valorValido = ao_cpf;
      return valorValido;
    } else {
      console.log("CPF invalido");
    }
  }
}

function mascaratel(v, n) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  if ((n = 4)) {
    v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quinto e o sexto dígitos
  } else {
    v = v.replace(/(\d)(\d{3})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  }
  return v;
}

function mascaracep(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/(\d)(\d{3})$/, "$1-$2"); //Coloca hífen entre o quinto e o sexto dígitos
  return v;
}
