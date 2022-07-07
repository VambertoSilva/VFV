// TELA MENU LATERAL

/*
        <div id="menu_lateral" class="page-deslizante" style="display:none;background-color: white;">
            <table width="100%">
                <tr>
                    <td align="center">
                        <img src="img/logo.png" width="50%" height="auto" />
                    </td>
                </tr>
                <tr>
                    <div style="height:0px"></div>
                </tr>
                <tr>
                    <td>
                        <table width="100%">
                            <tr onclick="menuLateralInicio();">
                                <td width="20%" align="center">
                                    <img src="img/home.png" class="iconeMenu" />
                                </td>
                                <td wdith="80%" align="left" style="border-bottom:1px solid #0C4DA1;">
                                    <div class="itensMenu">
                                        <p id="menuLatInicio" class="labelMenu">Início</p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%">
                            <tr onclick="menuLateralMinhasInscricoes();">
                                <td width="20%" align="center">
                                    <img id="menuLatIconeInicio" src="img/minhas-atividades.png" class="iconeMenu" />
                                </td>
                                <td wdith="80%" align="left" style="border-bottom:1px solid #0C4DA1;">
                                    <div class="itensMenu">
                                        <p class="labelMenu">Minhas Pré-Inscrições</p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%">
                            <tr onclick="menuLateralMinhasAtividades();">
                                <td width="20%" align="center">
                                    <img id="menuLatIconeInicio" src="img/minhas-atividades.png" class="iconeMenu" />
                                </td>
                                <td wdith="80%" align="left" style="border-bottom:1px solid #0C4DA1;">
                                    <div class="itensMenu">
                                        <p class="labelMenu">Minhas Atividades</p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td>
                        <table width="100%">
                            <tr onclick="menuLateralMinhaConta();">
                                <td width="20%" align="center">
                                    <img src="img/profile.png" class="iconeMenu" />
                                </td>
                                <td wdith="80%" align="left" style="border-bottom:1px solid #0C4DA1;">
                                    <div class="itensMenu">
                                        <p class="labelMenu">Minha Conta</p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%">
                            <tr onclick="menuLateralTrocaUsuario();">
                                <td width="20%" align="center">
                                    <img src="img/sair.png" class="iconeMenu" />
                                </td>
                                <td wdith="80%" align="left" style="border-bottom:1px solid #0C4DA1;">
                                    <div class="itensMenu">
                                        <p class="labelMenu">SAIR</p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>


    <div id="fundoMenuLateral" class="modal" ontouchmove="menuDeslizanteClose();"></div>

.page-deslizante{
    z-index:3;
    width:310px;
    height:100%;
    background:#ffffff;
    position:fixed;
    top:0px;
    left:0px;
    display:none;
}		

var menuLatInicio = document.getElementById("menuLatInicio");
var menuAdm = document.getElementById("menuAdm");
menu_lateral.style.width = (window.innerWidth * 0.8) + "px";
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

*/
