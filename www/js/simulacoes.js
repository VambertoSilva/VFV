function simula2(){
    hidePreloader();
    
        
    if(f1=="UsuariosLogin"){
        c1('{"usuario":{"Id":48,"SecreariaId":null,"nome":"Mario Cesar Berardo","cpf":"19918161892","email":"mario.berardo72@gmail.com","sexo":1,"pcd":0,"dt_nasc":"\/Date(83041200000)\/","celular":"(12)98861-8037","fixo":"(12)3921-8609","cep":"12223-430","rua":"Avenida Pedro Friggi","num":"2600","comp":"BL14 APTO 104","bairro":"Cidade Vista Verde","cidade":"São José dos Campos","senha":"123456","ativo":"S","nivel":1},"versao":"1.1.10"}');
        return;
    }

    if(f1=="LocalizarListaAtividades"){
       // `[{"ativid":1,"ativnome":"CONEXÃO JUVENTUDE","evento":1,"atividade":0},{"ativid":2,"ativnome":"CRAS","evento":1,"atividade":0},{"ativid":3,"ativnome":"MÚSICA NO MUSEU","evento":1,"atividade":0},{"ativid":2,"ativnome":"ARTESANATO","evento":0,"atividade":1},{"ativid":6,"ativnome":"AULA DE VIOLÃO","evento":0,"atividade":1},{"ativid":3,"ativnome":"BOXE","evento":0,"atividade":1},{"ativid":7,"ativnome":"KARATE","evento":0,"atividade":1},{"ativid":1,"ativnome":"NATAÇÃO","evento":0,"atividade":1}
       //"[{"ativid":1,"ativnome":"CONEXÃO JUVENTUDE","evento":1,"atividade":0},{"ativid":3,"ativnome":"BOXE","evento":0,"atividade":1},{"ativid":7,"ativnome":"KARATE","evento":0,"atividade":1},{"ativid":1,"ativnome":"NATAÇÃO","evento":0,"atividade":1}
      
       c1(`[{"ativid":1,"ativnome":"CONEXÃO JUVENTUDE","evento":1,"atividade":0},{"ativid":3,"ativnome":"BOXE","evento":0,"atividade":1},{"ativid":7,"ativnome":"KARATE","evento":0,"atividade":1},{"ativid":1,"ativnome":"NATAÇÃO","evento":0,"atividade":1}]`);
        return;
    }

    if(f1=="TurmasLista"){
        //{"retTexto":[{"linhaTitulo":"INFANTIL","linhaDados":"\u003cstrong\u003eLOCAL: \u003c/strong\u003eC. C. JOÃO PAULO I\u003cbr\u003e\u003cstrong\u003eVAGAS DISPONÍVEIS: \u003c/strong\u003e20 vagas\u003cbr\u003e\u003cstrong\u003eGÊNERO: \u003c/strong\u003eAmbos\u003cbr\u003e\u003cstrong\u003ePCD: \u003c/strong\u003eNÃO\u003cbr\u003e\u003cstrong\u003eIDADE: \u003c/strong\u003eAté 12 anos\u003cbr\u003e\u003cstrong\u003eDIAS: \u003c/strong\u003eSegunda-Feira, Terça-Feira, Quarta-Feira, Quinta-Feira, Sexta-Feira, Sábado, Domingo\u003cbr\u003e\u003cstrong\u003eHORÁRIOS: \u003c/strong\u003edas 10:10 às 11:10\u003cbr\u003e\u003cstrong\u003eOBS: \u003c/strong\u003e111111111122222222223333333390\u003cbr\u003e"},{"linhaTitulo":"INFANTIL","linhaDados":"\u003cstrong\u003eLOCAL: \u003c/strong\u003eCENTRO POLIESPORTIVO JOSÉ ADAILSON VIEIRA PINTO\u003cbr\u003e\u003cstrong\u003eVAGAS DISPONÍVEIS: \u003c/strong\u003eIlimitado\u003cbr\u003e\u003cstrong\u003eGÊNERO: \u003c/strong\u003eAmbos\u003cbr\u003e\u003cstrong\u003ePCD: \u003c/strong\u003eAMBOS\u003cbr\u003e\u003cstrong\u003eIDADE: \u003c/strong\u003eDe 5 a 50 anos\u003cbr\u003e\u003cstrong\u003eDIAS: \u003c/strong\u003eQuarta-Feira, Sexta-Feira\u003cbr\u003e\u003cstrong\u003eHORÁRIOS: \u003c/strong\u003edas 08:00 às 10:00\u003cbr\u003e"}],"turmas":[{"id":442,"nome":"INFANTIL","ativId":1,"eveId":null,"locId":122,"diasSemana":"Segunda-Feira:Terça-Feira:Quarta-Feira:Quinta-Feira:Sexta-Feira:Sábado:Domingo","horaInicio":"10:10","horaFim":"11:10","idadeMin":0,"idadeMax":12,"genero":2,"precisaTeste":"S","infoTeste":"111111111122222222223333333390","precisaInscr":"S","visivel":1,"pcd":0,"capacidade":30},{"id":662,"nome":"INFANTIL","ativId":1,"eveId":null,"locId":142,"diasSemana":"Quarta-Feira:Sexta-Feira","horaInicio":"08:00","horaFim":"10:00","idadeMin":5,"idadeMax":50,"genero":2,"precisaTeste":"N","infoTeste":null,"precisaInscr":"S","visivel":1,"pcd":2,"capacidade":0}]}
        c1(`{"retTexto":[{"linhaTitulo":"Adulto Aperfeiçoamento","linhaDados":"\u003cstrong\u003eLOCAL:\u003c/strong\u003e\u003cbr\u003eCentro Comunitário João Paulo I\u003cbr\u003e\u003cstrong\u003eGENERO:\u003c/strong\u003e\u003cbr\u003eUNISEX\u003cbr\u003e\u003cstrong\u003ePCD:\u003c/strong\u003e\u003cbr\u003eSIM\u003cbr\u003e\u003cstrong\u003eIDADE:\u003c/strong\u003e\u003cbr\u003ede 15 até 130 anos\u003cbr\u003e\u003cstrong\u003eDIAS:\u003c/strong\u003e\u003cbr\u003eSegunda-Feira:Quarta-Feira:Sexta-Feira\u003cbr\u003e\u003cstrong\u003eHORARIOS:\u003c/strong\u003e\u003cbr\u003edas 07:30 às 08:20\u003cbr\u003e"},{"linhaTitulo":"Adulto Nível I","linhaDados":"\u003cstrong\u003eLOCAL:\u003c/strong\u003e\u003cbr\u003eCentro Comunitário João Paulo I\u003cbr\u003e\u003cstrong\u003eGENERO:\u003c/strong\u003e\u003cbr\u003eUNISEX\u003cbr\u003e\u003cstrong\u003ePCD:\u003c/strong\u003e\u003cbr\u003eNÂO\u003cbr\u003e\u003cstrong\u003eIDADE:\u003c/strong\u003e\u003cbr\u003ede 15 até 120 anos\u003cbr\u003e\u003cstrong\u003eDIAS:\u003c/strong\u003e\u003cbr\u003eTerça-Feira:Quinta-Feira\u003cbr\u003e\u003cstrong\u003eHORARIOS:\u003c/strong\u003e\u003cbr\u003edas 07:30 às 08:20\u003cbr\u003e"}],"turmas":[{"TURM_NOME":"Adulto Aperfeiçoamento","TURM_DIAS_SEMANA":"Segunda-Feira:Quarta-Feira:Sexta-Feira","TURM_HORA_INICIO":"07:30","TURM_HORA_FIM":"08:20","TURM_IDADE_MIN":"15","TURM_IDADE_MAX":"130","TURM_GENERO":"Ambos","LOCA_NOME_ENTIDADE":"Centro Comunitário João Paulo I","LOCA_FONE":null,"TURM_PCD":1},{"TURM_NOME":"Adulto Nível I","TURM_DIAS_SEMANA":"Terça-Feira:Quinta-Feira","TURM_HORA_INICIO":"07:30","TURM_HORA_FIM":"08:20","TURM_IDADE_MIN":"15","TURM_IDADE_MAX":"120","TURM_GENERO":"Ambos","LOCA_NOME_ENTIDADE":"Centro Comunitário João Paulo I","LOCA_FONE":null,"TURM_PCD":0}]}`);
        return;
    }
    
    if(f1=="MinhasTurmasLista"){
        c1(`{"retTexto":[{"linhaTitulo":"Adulto Aperfeiçoamento","linhaDados":"\u003cstrong\u003eLOCAL:\u003c/strong\u003e\u003cbr\u003eCentro Comunitário João Paulo I\u003cbr\u003e\u003cstrong\u003eGENERO:\u003c/strong\u003e\u003cbr\u003eUNISEX\u003cbr\u003e\u003cstrong\u003ePCD:\u003c/strong\u003e\u003cbr\u003eSIM\u003cbr\u003e\u003cstrong\u003eIDADE:\u003c/strong\u003e\u003cbr\u003ede 15 até 130 anos\u003cbr\u003e\u003cstrong\u003eDIAS:\u003c/strong\u003e\u003cbr\u003eSegunda-Feira:Quarta-Feira:Sexta-Feira\u003cbr\u003e\u003cstrong\u003eHORARIOS:\u003c/strong\u003e\u003cbr\u003edas 07:30 às 08:20\u003cbr\u003e"},{"linhaTitulo":"Adulto Nível I","linhaDados":"\u003cstrong\u003eLOCAL:\u003c/strong\u003e\u003cbr\u003eCentro Comunitário João Paulo I\u003cbr\u003e\u003cstrong\u003eGENERO:\u003c/strong\u003e\u003cbr\u003eUNISEX\u003cbr\u003e\u003cstrong\u003ePCD:\u003c/strong\u003e\u003cbr\u003eNÂO\u003cbr\u003e\u003cstrong\u003eIDADE:\u003c/strong\u003e\u003cbr\u003ede 15 até 120 anos\u003cbr\u003e\u003cstrong\u003eDIAS:\u003c/strong\u003e\u003cbr\u003eTerça-Feira:Quinta-Feira\u003cbr\u003e\u003cstrong\u003eHORARIOS:\u003c/strong\u003e\u003cbr\u003edas 07:30 às 08:20\u003cbr\u003e"}],"turmas":[{"TURM_ID":31,"TURM_NOME":"Adulto Aperfeiçoamento","TURM_DIAS_SEMANA":"Segunda-Feira:Quarta-Feira:Sexta-Feira","TURM_HORA_INICIO":"07:30","TURM_HORA_FIM":"08:20","TURM_IDADE_MIN":"15","TURM_IDADE_MAX":"130","TURM_GENERO":"Ambos","LOCA_NOME_ENTIDADE":"Centro Comunitário João Paulo I","LOCA_FONE":null,"TURM_PRECISA_TESTE":"S","TURM_PRECISA_INSCR":"S","TURM_VISIVEL":1,"TURM_PCD":1},{"TURM_ID":30,"TURM_NOME":"Adulto Nível I","TURM_DIAS_SEMANA":"Terça-Feira:Quinta-Feira","TURM_HORA_INICIO":"07:30","TURM_HORA_FIM":"08:20","TURM_IDADE_MIN":"15","TURM_IDADE_MAX":"120","TURM_GENERO":"Ambos","LOCA_NOME_ENTIDADE":"Centro Comunitário João Paulo I","LOCA_FONE":null,"TURM_PRECISA_TESTE":"N","TURM_PRECISA_INSCR":"S","TURM_VISIVEL":1,"TURM_PCD":0}]}`);
        return;
    }

    if(f1=="InstrutorTurmasLista"){
        c1(`{"length":2,"retTexto":[{"linhaTitulo":"NATAÇÃO-INFANTIL","linhaDados":"\u003cstrong\u003eLOCAL: \u003c/strong\u003eC. C. JOÃO PAULO I\u003cbr\u003e\u003cstrong\u003eGENERO: \u003c/strong\u003eAmbos\u003cbr\u003e\u003cstrong\u003ePCD: \u003c/strong\u003eNÂO\u003cbr\u003e\u003cstrong\u003eIDADE: \u003c/strong\u003eAté 12 anos\u003cbr\u003e\u003cstrong\u003eDIAS: \u003c/strong\u003eSegunda-Feira, Terça-Feira, Quarta-Feira, Quinta-Feira, Sexta-Feira, Sábado, Domingo\u003cbr\u003e\u003cstrong\u003eHORARIOS: \u003c/strong\u003eDAS 10:10 ÀS 11:10\u003cbr\u003e\u003cstrong\u003eObs: \u003c/strong\u003e\u003cbr\u003e"}],"turmasInstrutor":[{"tins_id":2,"turmaId":442,"instId":291}]}`);
        return;
    }

    if(f1=="ListaAlunosTurma"){
        c1(`{"inscricao":true,"alunosTurma":[{"id":843,"talu_id":109,"nome":"ANDRE MARQUES","respNome":"GENOVEVA MARIA WOODS","respTel":"(12)98231-5156 ","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":921,"talu_id":114,"nome":"PATRICK MADUREIRA","respNome":"JULIO CESAR DOS SANTOS","respTel":"(12) 98836-0788 ","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":922,"talu_id":115,"nome":"JOANA DARC","respNome":"JULIO CESAR DOS SANTOS","respTel":"(12) 98836-0788 ","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":1141,"talu_id":140,"nome":"TESTE","respNome":"MARCELA NOVAES","respTel":"(12)98836-0788 ","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":841,"talu_id":107,"nome":"LUIZ GONZAGA","respNome":"LUIZ GONZAGA","respTel":"(12)98231-5156 ","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":842,"talu_id":108,"nome":"MARCELA NOVAES","respNome":"MARCELA NOVAES","respTel":"(12)98836-0788 ","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":984,"talu_id":128,"nome":"TESTE","respNome":"TESTE","respTel":"(12) 98231-5156 / (12) 98231-5156","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":985,"talu_id":129,"nome":"SEGUNDO PRE-INSCRITO","respNome":"MAE DO SEGUNDO","respTel":"(12) 98231-5156 / (12) 98231-5156","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":861,"talu_id":110,"nome":"THIAGO SANTOS","respNome":"THIAGO SANTOS","respTel":"(12)98231-5156 ","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":1081,"talu_id":134,"nome":"BRANDON LEE","respNome":"CHUCK NORRIS","respTel":"(12) 98836-0788 / (12) 98836-0788","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"}],"nomeAtividade":"NATAÇÃO","nomeTurma":"INFANTIL"}`);
        return;
    }


    //inst_lista_turmas
    //{"length":2,"retTexto":[{"linhaTitulo":"NATAÇÃO-INFANTIL","linhaDados":"\u003cstrong\u003eLOCAL: \u003c/strong\u003eC. C. JOÃO PAULO I\u003cbr\u003e\u003cstrong\u003eGENERO: \u003c/strong\u003eAmbos\u003cbr\u003e\u003cstrong\u003ePCD: \u003c/strong\u003eNÂO\u003cbr\u003e\u003cstrong\u003eIDADE: \u003c/strong\u003eAté 12 anos\u003cbr\u003e\u003cstrong\u003eDIAS: \u003c/strong\u003eSegunda-Feira, Terça-Feira, Quarta-Feira, Quinta-Feira, Sexta-Feira, Sábado, Domingo\u003cbr\u003e\u003cstrong\u003eHORARIOS: \u003c/strong\u003eDAS 10:10 ÀS 11:10\u003cbr\u003e\u003cstrong\u003eObs: \u003c/strong\u003e\u003cbr\u003e"}],"turmasInstrutor":[{"tins_id":2,"turmaId":442,"instId":291}]}

//Apontar    
//"{"inscricao":true,"alunosTurma":[{"id":843,"talu_id":109,"nome":"ANDRE MARQUES","respNome":"GENOVEVA MARIA WOODS","respTel":"(12)98231-5156 ","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":921,"talu_id":114,"nome":"PATRICK MADUREIRA","respNome":"JULIO CESAR DOS SANTOS","respTel":"(12) 98836-0788 ","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":922,"talu_id":115,"nome":"JOANA DARC","respNome":"JULIO CESAR DOS SANTOS","respTel":"(12) 98836-0788 ","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":1141,"talu_id":140,"nome":"TESTE","respNome":"MARCELA NOVAES","respTel":"(12)98836-0788 ","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":841,"talu_id":107,"nome":"LUIZ GONZAGA","respNome":"LUIZ GONZAGA","respTel":"(12)98231-5156 ","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":842,"talu_id":108,"nome":"MARCELA NOVAES","respNome":"MARCELA NOVAES","respTel":"(12)98836-0788 ","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":984,"talu_id":128,"nome":"TESTE","respNome":"TESTE","respTel":"(12) 98231-5156 / (12) 98231-5156","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":985,"talu_id":129,"nome":"SEGUNDO PRE-INSCRITO","respNome":"MAE DO SEGUNDO","respTel":"(12) 98231-5156 / (12) 98231-5156","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":861,"talu_id":110,"nome":"THIAGO SANTOS","respNome":"THIAGO SANTOS","respTel":"(12)98231-5156 ","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"},{"id":1081,"talu_id":134,"nome":"BRANDON LEE","respNome":"CHUCK NORRIS","respTel":"(12) 98836-0788 / (12) 98836-0788","presenca":2,"justificativa":"APONTAMENTO NÃO REALIZADO"}],"nomeAtividade":"NATAÇÃO","nomeTurma":"INFANTIL"}

}

function simulaPost(f,p,c){
    f1=f;
    p1=p;
    c1=c;

    setTimeout(simula2,500);
}    

function simulaGet(f,c){
    f1=f;
    c1=c;

    setTimeout(simula2,2000);
}    


