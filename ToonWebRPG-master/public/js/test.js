var coin = 0;
var xp = 0;
var hp = 100;
var level = 1;
var derek = 0;
var mike = 0;

function Level(){
	document.getElementById("level").innerHTML = "Level: " + level;
}
function buyDerekPet(){

	if(coin >= 5 ){
		derek = derek + 1
		coin = coin - 5

	}
	document.getElementById("derek").innerHTML = "Derek: " + derek;
	document.getElementById("coin").innerHTML = "Coins: " + coin;
}

function buyMikePet(){

	if(coin >= 2 ){
		mike = mike + 1
		coin = coin - 2

	}
	document.getElementById("mike").innerHTML = "Mike: " + mike;
	document.getElementById("coin").innerHTML = "Coins: " + coin;
}

function addCoin() {
coin = coin + 1
			
document.getElementById("coin").innerHTML = "Coins: " + coin;

}
function addXp() {
xp = xp + 10
if(xp <= 100) {
	document.getElementById("xpbar").innerHTML = xp + "/100";
	document.getElementById("xpbar").style.width = xp+"%";
	}
if(xp == 100){
	xp = 0
	document.getElementById("xpbar").innerHTML = xp + "/100";
	document.getElementById("xpbar").style.width = xp+"%";
	if(hp < 100)
	{
	hp = 100
	document.getElementById("hpbar").style.width = hp+"%";
	document.getElementById("hpbar").innerHTML = hp + "/100";
	}
	level = level + 1
	document.getElementById("level").innerHTML = "Level: " + level;
}
if(xp == 0){
	document.getElementById("xpbar").innerHTML = "";
}
}


function subHp() {
hp = hp - 10
if(hp > 0) {
	document.getElementById("hpbar").innerHTML = hp + "/100";
	document.getElementById("hpbar").style.width = hp+"%";
	}
if(hp == 0) {
	document.getElementById("hpbar").innerHTML = "";
	document.getElementById("hpbar").style.width = hp+"%";
	alert('You are the dead! D: Your level and coins has been reset');
	window.setTimeout(reset,1000);
}
}

function reset(){
window.location.reload();
}