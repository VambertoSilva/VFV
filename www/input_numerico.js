let qtdNum = new Array(11);
let qtdInd = 0;
let qtdTam =0;


function inputNumerico_Show(){
    
    inicializaVariaveisDoInput();
    escreveInputNumerico();
    trocaTela('input_numerico');

}

function inicializaVariaveisDoInput(){
    qtdNum =[];
    for(var i=0;i<=8;i++) qtdNum[i]='u';
    qtdInd = 0;
    qtdTam =0;
    
}

function addNumInputNumerico(num){
    if(num=='C'){
        limparInputNumerico();
        return;
    }
    for(var i=8;i>=1;i--) {
        qtdNum[i]=qtdNum[i-1];
    }
    qtdNum[0]=num;
    escreveInputNumerico();
}


function limparInputNumerico(){
    inicializaVariaveisDoInput();
    escreveInputNumerico();
}

function escreveInputNumerico(){
    str="";
    var digitos=8;

    if((qtdNum.length-1)>digitos){
        digitos=qtdNum.length;
    }
    
    for(var i=digitos;i>=0;i--){
        if(i>=3){
            if(qtdNum[i]!='u'){
                str+=qtdNum[i]
                if(i==6){
                    str+=".";
                }
            }
        }
        if(i==3){
             str+=",";
        }
        if(i<=2){
            if(qtdNum[i]!='u'){
                str+=qtdNum[i]
            } else {
                str+='0';
            }
        }
        if(str.indexOf(",")==0){
            str = "0"+str;
        }
    }
    lblPedidoQuantidade.innerHTML = str;
}

function converte(strDig){

    strDig = strDig.replace(".","");
    strDig = strDig.replace(",",".");
    return parseFloat(strDig);

}

function inputNumericoOk_click(){
    
    var qtdDig = lblPedidoQuantidade.innerHTML;

    var qtdNumero = converte(qtdDig);

    // gPedItemInd : lista_pedidos-> receberParcial_click
    if(qtdNumero<=itensPedidos[gPedItemInd].quantidadeFaltando){
        gAlgumItemRecebido=true;
        itensPedidos[gPedItemInd].recebido = qtdNumero;            
        itensPedidos[gPedItemInd].funcao = 1;
        itensPedidos[gPedItemInd].motivo = 0;

        lista_pedidos_Show();
    } else {
        alerta("ERRO!","Quantidade recebida é maior que a quantidade faltando !",null)
    }             
}