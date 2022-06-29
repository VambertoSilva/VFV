var versao = "D";

var simulaAjax = false;

var gTokenApi = "";

var gScanning = false;

var gLarguraTela = 0;
var gAlturaTela = 0;

var mdDone = false;

var temRede = false;

// Aqui pode colocar os endpoits usados no app. Pode alterar.
const endPoints = {
apiUrlProducao: ' https://urbamsjc.com.br/eletrica/',
//apiUrlProducao: ' https://staging.urbamsjc.com.br/eletrica/',
ssoUrl: 'https://urbamsjc.com.br/sso2',
login: '/jwt/login',
refresh: '/jwt/refresh',
appVersion: '/versao',
listarEquipes :'api/equipe/listarTodas', 
listarOrdens: 'app/listarOcorrenciasPorEquipe',
sincronizar: 'app/sincronizar',
getConfigs :'app/configuracoes', 
}


