var strike = Math.floor(Math.random()*3);
window.onload = function(){ 
    document.getElementById("deck").onclick = myhandler; 
} 
function myhandler(e) { 
    var card0 = document.getElementById("card0"); 
    var card1 = document.getElementById("card1"); 
    var card2 = document.getElementById("card2");
    var shuffle = document.getElementById("shuffle");
    if(e.target == shuffle){
        strike = Math.floor(Math.random()*3);
        card0.textContent="";
        card1.textContent="";
        card2.textContent="";
    }
    if(e.target == card0 && strike == 0 ||
        e.target == card1 && strike == 1 ||
        e.target == card2 && strike == 2){
        e.target.textContent="〇"
    }

}


