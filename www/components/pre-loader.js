/*
    <img id="preloader" class="preloader" width="64" height="64" src="img/preloader.png" style="display:none;position:fixed;z-index:3;">

.preloader {
    position: absolute;
    width: 120px;
    height: 120px;
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
}

var plAngle = 20;
var  timerRotacao = null;


function rotatePreloader (){
	
	preloader.style.transform = "rotate("+plAngle+"deg)";
	plAngle+=20;
	if(plAngle>360) plAngle=0;
	return;
	
}

function hidePreloader(){
	preloader.style.display = 'none';
}

function showPreloader(){

	preloader.style.display = 'block';
	preloader.style.position="fixed";
	preloader.style.top="200px";
	
    larguraPreloader=preloader.offsetWidth;
	
    preloader.style.left = (window.innerWidth / 2) - (larguraPreloader / 2) + "px";

	plAngle=20;
	
}

//////////
*/