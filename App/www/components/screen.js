/*
<div id="precisa do id" class="page">
</div>

.page {
    display: none;
    height: 100vh;
    border-spacing:0px;
    overflow:auto!important;
}

    function ajustaPages(){

        var divs = document.getElementsByTagName("div"); // pega todos os divs
        for (var i = 0; i <= divs.length - 1; i++) {
            if (divs[i].className == "page") { // se tem uma class especifica (no seu caso centralizar), muda a propriedade width.
                var d = document.getElementById(divs[i].id);
                d.style.width = window.innerWidth + "px";
                d.style.height = (window.innerHeight-53) + "px";
            }
        }
    }


*/