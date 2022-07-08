function det_ocorrencia_Show(){

    configAppBarBasics("Detalhes da Ocorrência","showBackButton");
   
    
    if(!gAtendAndamento) {

      OSind =0;
      OcInd =0;
  
      while(gOrdens[OSind].ordemServicoId!=gidOrdemServico) OSind ++;
  
      while(gOrdens[OSind].ocorrencias[OcInd].id!=gidOcorrencia) OcInd ++;
  
      let regOcorrencia = gOrdens[OSind].ocorrencias[OcInd];

      html = `<strong>Inicio Atendimento:</strong> Não iniciado.`;
      document.querySelector('#lbl_inicio_atendimento').innerHTML = html;
      document.querySelector('#tblMatAtend').innerHTML = "";
      
      html = ''
      document.querySelector('#cmbStatus').innerHTML = html;
      
      html = ''
      document.querySelector('#cmbMotivos').innerHTML = html;
   
      html = '<textarea id="obs_ocorrencia" class="input_login">' + regOcorrencia.observacao +'</textarea>'
      document.querySelector('#edtObservacao').innerHTML = html;

      edtPontos.value = regOcorrencia.quantidadePontos; 
  
      txtOcorrObs.value = "";
    }
    
    trocaTela("det_ocorrencia");
   
 
  }


function btnAddMat_click(){

  if(!gAtendAndamento){
    alerta("ATENÇÃO !!", "Favor inicar o atendimento !");
    return;
  }
  materiais_Show();

}

function cmbStatus_click(){

  if(cmbStatus.options[cmbStatus.selectedIndex].innerHTML=='Atendido'){

    html = '<option value:0>Selecione um motivo</option>'
    for(let i=0;i<gAppConnfigs.motivoAtendido.length;i++) {
      html = html + `<option value="${gAppConnfigs.motivoAtendido[i]}">${gAppConnfigs.motivoAtendido[i]}</option>`;
    }
    document.querySelector('#cmbMotivos').innerHTML = html;

  }

  if(cmbStatus.options[cmbStatus.selectedIndex].innerHTML=='Impossibilidade'){

    html = '<option value:0>Selecione um motivo</option>'
    for(let i=0;i<gAppConnfigs.motivosImpossibilidade.length;i++) {
      html = html + '<option value="valor">'+ gAppConnfigs.motivosImpossibilidade[i] +'</option>';
    }
    document.querySelector('#cmbMotivos').innerHTML = html;

  }

}  

function showDetalhesObs(){

  alerta("Observações",gOrdens[OSind].ocorrencias[OcInd].observacao,null);
  return;

}

function btnIniciarAtendimento_click(){

  let DataAux = new Date();
  di = [DataAux.getFullYear(),
    DataAux.getMonth()+1,
    DataAux.getDate(),
    DataAux.getHours(),
    DataAux.getMinutes(),
    0
  ];

  gOrdens[OSind].ocorrencias[OcInd].status = "INICIADA";
 
  gAtendMatUtil=[];
 
  html = `<strong>Inicio Atendimento:</strong>${di[2]}/${di[1]}/${di[0]} ${di[3]}:${di[4]}`;
  document.querySelector('#lbl_inicio_atendimento').innerHTML = html;
  gAtendAndamento=true;

  html = '<option value:0>Selecione um status</option>'
  for(let i=0;i<gAppConnfigs.status.length;i++) {
    html = html + `<option value="${gAppConnfigs.status[i]}">${gAppConnfigs.status[i]}</option>`;
  }
  document.querySelector('#cmbStatus').innerHTML = html;


}

function btnFinalizarAtendimento_click(){

  gOrdens[OSind].ocorrencias[OcInd].status = "FINALIZADA";

  if(gAtendAndamento){
    if(!validacoes()){
      return;
    }

    gAtendAndamento=false;
    gOrdens[OSind].ocorrencias[OcInd].matricula = `${user.matricula}`;
    document.querySelector('#tblMatAtend').innerHTML = "";
    registarAtendimento();
    registrarMateriais();

    ocorrencias_Show();
  }
}  

function btnPausarAtendimento_click(){

  if(gAtendAndamento){
    if(!validacoes()){
      return;
    }

    registarAtendimento();
    registrarMateriais();
    gAtendAndamento=false;

    ocorrencias_Show();
  }

}


function registarAtendimento(){
  
  let DataAux = new Date();
  df = [DataAux.getFullYear(),
    DataAux.getMonth()+1,
    DataAux.getDate(),
    DataAux.getHours(),
    DataAux.getMinutes(),
    0
  ];
  
  gOrdens[OSind].ocorrencias[OcInd].atendimentos.push({
    dataInicio : di,
    dataFim:df,
    status:gStatus, //vem da validacoes()
    motivo:gMotivo,
    id:0,
    ocorrenciaId: `${gidOcorrencia}`,
    matricula: `${user.matricula}`,
    observacao: `${txtOcorrObs.value}`
  });
  gravaOrdensLocal();
  
}

function registrarMateriais(){
  
  mat = gAtendMatUtil.filter((it)=>it.ocorrId==gidOcorrencia);
  for(i=0;i<=mat.length-1;i++){
    gOrdens[OSind].ocorrencias[OcInd].materiaisUtilizados.push(mat[i]);
  }
  gAtendMatUtil = [];

  gravaOrdensLocal();

}

function gravaOrdensLocal(){
  localStorage.setItem('lastEquipe',gidEquipe);
  localStorage.setItem('ordemservico',JSON.stringify(gOrdens));

  return;
}


function removerMaterial_click(ind){
  
  mat = gAtendMatUtil;
  gAtendMatUtil = [];
  html="";
  for(i=0;i<=mat.length-1;i++){
    if(i!=ind){
      gAtendMatUtil.push(mat[i]);
    }
    
  } 
  materiaisMontaTabela();
}

function validacoes(){
  
  gStatus="";
  gMotivo="";

  if(cmbStatus.value=='Selecione um status'){
    alerta("ATENÇÃO !!","Favor selecionar um status!");
    return false;
  }

  gStatus = cmbStatus.options[cmbStatus.selectedIndex].innerHTML;
  
  if((cmbStatus.value=="Atendido")||(cmbStatus.value=="Impossibilidade")){
    if(cmbMotivos.value=='Selecione um motivo'){
      alerta("ATENÇÃO !!","Favor selecionar um motivo!");
      return false;
    }
    gMotivo = cmbMotivos.options[cmbMotivos.selectedIndex].innerHTML;
  }

  if((cmbStatus.value=='Impossibilidade')||(cmbStatus.value=='Lâmpada Queimada')){
    gOrdens[OSind].ocorrencias[OcInd].status = "REABRIR";

    if((cmbMotivos.value=='Outros')&&(txtOcorrObs.value=="")){
      alerta("ATENÇÃO !!","Favor preencher a observação!");
      return false;
        
    }

 
  }

  return true; 

}

  /*
  function btnCancelarAtendimento_click(){
  
    document.querySelector('#tblMatAtend').innerHTML = "";
    gAtendMatUtil = [];
    gOrdens[OSind].ocorrencias[OcInd].status = "PENDENTE";
    ocorrencias_Show();
  
  }
  */
