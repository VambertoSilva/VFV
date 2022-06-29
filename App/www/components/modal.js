   //MODAL

/*
    <div id="modalMain" class="modal">
        <table width="100%">
            <tr>
                <td align="center">
                    <div id="modalContent" class="modal-content">
                        <table width="100%">
                            <tr>
                                <td align="center" id="modalHeader" style="height:40px;border-radius:10px;">
                                    <p id="modalTitulo" align="center" class="amareloa3" style="font-size:16px;"></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p id="modalText" align="justify" class="label white"></p>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <table width="100%">
                                        <tr>
                                            <td width="33%">
                                                <!-- <button id="modalYes" class="buttonConfirma" onclick="modalCallBack_SIM();">SIM</button>-->
                                                <!-- <button id="modalYes" class="button-verde buttonHeight" onclick="modalCallBack_SIM();">SIM</button>-->
                                                <img id="modalYes" src="img/botao_sim.png" width="100px" height="50px" onclick="modalCallBack_SIM();">
                                            </td>
                                            <td width="33%">
                                                <!--<button id="modalOk" class="buttonConfirma" onclick="modalCallBack_OK();">OK</button> -->
                                                <img id="modalOk" src="img/botao_ok.png" width="100px" height="50px" onclick="modalCallBack_OK();">
                                                <!--<button id="modalOk" class="button buttonHeight" onclick="modalCallBack_OK();">OK</button>-->
                                            </td>
                                            <td width="33%">
                                                <!--<button id="modalNo" class="buttonConfirma" onclick="modalCallBack_NAO();">NÃO</button>-->
                                                <img id="modalNo" src="img/botao_nao.png" width="100px" height="50px" onclick="modalCallBack_NAO();">
                                                <!--<button id="modalNo" class="button-vermelho buttonHeight" onclick="modalCallBack_NAO();">NÃO</button>-->
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
        </table>


    </div>

.modal {
    display: none; 
    position: fixed; 
    z-index: 2; 
    padding-top: 50px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
}

.modal-content {
    background: -webkit-linear-gradient(0deg,#002444,#798c9d);
    margin: auto;
    padding: 0px;
    border: 1px solid #888888;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    width: 90%;
    position:relative;
    top:70px;
    box-shadow: 5px 5px 10px #888888;
}

.modalContentText {
    color:#000000;
    font-family:Arial;
    font-size:16px;
    border-spacing:0px;

}

.modalHText {
    color:#FFFFFF;
    font-family:Arial;
    font-size:16px;
    border-radius: 5px;
  }




var modalContent = document.getElementById("modalContent");

var modalMain = document.getElementById("modalMain");
var modalContent = document.getElementById("modalContent");
var modalTitulo = document.getElementById("modalTitulo");
var modalText = document.getElementById("modalText");
var modalYes = document.getElementById("modalYes");
var modalOk = document.getElementById("modalOk");
var modalNo = document.getElementById("modalNo");

var funcaoDaModal = "";
var modalResult = 0; // 0-No, 1-Yes;

modalMain.style.display="none";


//CallBacks da Modal

    function voidAlertCallBack() {
        return;
    }

    function modalCallBack_SIM() {
        modalMain.style.display = "none";
        modalOn = false;
        if (funcaoDaModal == "semAcao") {
            return;
        }

    }

    function modalCallBack_NAO() {
        modalMain.style.display = "none";
        modalOn = false;

        if (funcaoDaModal == "semAcao") {
            return;
        }


    }

    function modalCallBack_OK() {
        modalMain.style.display = "none";
        modalOn = false;

        if (funcaoDaModal == "semAcao") {
            return;
        }


    }
*/