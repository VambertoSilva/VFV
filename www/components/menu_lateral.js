// TELA MENU LATERAL

var menuLatInicio = document.getElementById("menuLatInicio");
var menuAdm = document.getElementById("menuAdm");

function menuLateralInicio(){
    menuDeslizanteClose();
    menu_principal_Show();
}

function menuLateralTrocaUsuario(){
    menuDeslizanteClose();
    login_Show();
    
}

function menuLateralMinhasInscricoes(){
    menuDeslizanteClose();
    
    par=`usuId=${gUser.Id}`;
    doPost(gServerPath+"MinhasInscricoesLista",par,function(retorno){

        var ret=JSON.parse(retorno);

        if((ret.erros)||(ret.message)) {
            if(ret.erros){
                var cabecalho = "ERRO !!!";
        
            } else {
                var cabecalho = "ATENÇÃO !!!";
    
            }
    
            alerta(ret.mensagem,cabecalho,null);
            return;
        }
    
        gMinhasIns = ret;

        minhas_inscricoes_Show("P");

    });

  
}


function menuLateralMinhasAtividades(){
    menuDeslizanteClose();
    
    par=`usuId=${gUser.Id}`;
    doPost(gServerPath+"MinhasInscricoesLista",par,function(retorno){

        var ret=JSON.parse(retorno);

        if((ret.erros)||(ret.message)) {
            if(ret.erros){
                var cabecalho = "ERRO !!!";
        
            } else {
                var cabecalho = "ATENÇÃO !!!";
    
            }
    
            alerta(ret.mensagem,cabecalho,null);
            return;
        }
    
        gMinhasIns = ret;

        minhas_inscricoes_Show("I");

    });

  
}



function menuLateralMinhaConta(){
    menuDeslizanteClose();
    cadastro_Show("alterar");


}

function menuLateralSair(){
    menuDeslizanteClose();
    login_Show();
    
}

function mdOpen() {
    mdElapsed = mdElapsed + mdStep;
    menu_lateral.style.width = mdElapsed;

    if (mdElapsed > mdStep) {
        clearInterval(mdTimer);
        mdDone = true;
    }

}

function menuDeslizanteClose() {
    menu_lateral.style.width = mdStart;
    menu_lateral.style.display = "none";
    fundoMenuLateral.style.display="none";
    mdDone = false;

}

function menuDeslizanteOpen() {
    if (!mdDone) {

        mdDone=true;
        menu_lateral.style.display = "block";
        fundoMenuLateral.style.display = "block";
        menu_lateral.style.width = mdStart;
        mdTimer = setInterval(mdOpen, mdIntervalo);

    }

}
