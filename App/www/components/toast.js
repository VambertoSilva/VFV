/*
    <div id="toast" class="toast">
        <p id="toast-text" style="position: absolute;top:2px;left:5px"></p>
    </div>

.toast {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    width: 100%;
    height:30px;
    padding: 1px;
    overflow: hidden;
    border: none;
    -webkit-border-radius: 36px;
    border-radius: 36px;
    font: normal 16px/1 Arial;
    color: #FFFFFF;
    text-align: center;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    background: #2f509b;
    -webkit-box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3);
    box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3);
    text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
    z-index: 2;
}

.toast-pos {
    top:100px;

}

var  toast = document.getElementById("toast");
var toastText = document.getElementById("toastText");
var  toastExibida = false;

// TOASTS

function showToast(text,time){
    toastExibida=false;
    toastText.innerHTML = text ;
    toast.style.display = "block";

    if(time>0){
        setTimeout(function () {
               removeToast();
            },time);
    }
}

function removeToast(){
    toast.style.display = "none";
    toastExibida=true;
    return;
}    


*/


/////////////////////////