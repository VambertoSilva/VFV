/*
<table id="precisa do id" calss="listview">
  
</table>

.listview {
    overflow:auto!important;
    margin-top:20%;
}

function ajustaListViews(){
    var tbls = document.getElementsByTagName("table"); // pega todos os divs
    for (var i = 0; i <= tbls.length - 1; i++) {
        if (tbls[i].className == "listview") { // se tem uma class especifica (no seu caso centralizar), muda a propriedade width.
            var d = document.getElementById(tbls[i].id);
            d.style.width = window.innerWidth + "px";
        }
    }
}
*/