var suuzi = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13];
var firstflg = true;
var first;
var num1;
var id1;
var div;
var backTimer;
var point=0;
var score=0;
window.onload = function(){ 
    for(var i = 0 ; i < 52 ; i++){
        var L = suuzi.length;
        var s = Math.floor(Math.random()*L);
        var a = suuzi[s];
        i.number = a;
        var b =i.number;
        suuzi.splice(s,1);
        document.getElementById(i).textContent+=a;
    }
    document.getElementById("deck").onclick = myhandler; 
} 
function myhandler(e) { 
    if(backTimer)return;
    div =e.target;
    var cla = div.className
    if(cla != 'card back')return;
    var id2 =div.id;
    if(firstflg){
        first = div;
        id1 = div.id;
        num1 = div.textContent;
        first.className = 'card';
        firstflg = false;
        score++;
    }else{
        var num2 = div.textContent;
        num1 = Number(num1);
        num2 = Number(num2);
        if(num1==num2){
            div.className = 'card';
            backTimer = setTimeout("hide()", 1000);
            point += 2;
            if(point==52)document.getElementById("deck").textContent="クリア!! 点数："+score;
            }else{
            div.className = 'card';
            backTimer = setTimeout("back()", 1000);
            } 
         firstflg = true;
         score++;     
      }
}
function hide(){
    first.style.visibility = 'hidden';
    div.style.visibility = 'hidden';
    backTimer = NaN
}
function back(){
    first.className = 'card back';
    div.className = 'card back';
    backTimer = NaN;
}
