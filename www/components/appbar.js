/*
            <div id="precisa de id" class="appbar">
                <img src="img/botao_voltar.png" onclick="onBackKeyDown();" style="width:30px;height:auto;position:absolute;top:10px;left:5px">
                <p class="lbl20 cor_label_login" style="position:absolute;top:10px;left:40px">Vistorias</p>
            </div>


function ajustaAppBar(){
    var divs = document.getElementsByTagName("div"); // pega todos os divs
    for (var i = 0; i <= divs.length - 1; i++) {
        if (divs[i].className == "appbar") { // se tem uma class especifica (no seu caso centralizar), muda a propriedade width.
            var d = document.getElementById(divs[i].id);
            d.style.width = window.innerWidth + "px";
            d.style.height = (window.innerHeight-53) + "px";
        }
    }
}

 .appbar {
    background-color: #2f509b;
    position:absolute;
    top:0;
    left:0;
    height: 50px; 
    margin-bottom: 10px;
}

*/