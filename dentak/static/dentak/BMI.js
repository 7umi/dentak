function calcBMI(){
    var  m = document.getElementById("i0").value;
    var  kg = document.getElementById("i1").value;
    m = Number(m);
    kg = Number(kg);
    var bmi = kg / (m*m);
    bmi=bmi*100;
    bmi=Math.round(bmi)/100;
    document.getElementById("result").innerHTML = "あなたのBMIは"+bmi+"です。";
}

var ctx;
function init(){
    var canvas = document.getElementById("can");
    ctx = canvas.getContext("2d");
    ctx.strokeStyle="#FF0000";
    ctx.fillStyle="#00FF00";
    ctx.lineWidth=10;
    ctx.lineCap="round";
    ctx.shadowColor="#000000";
    ctx.shadowBlur=20;
    
    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(200,200);
    ctx.stroke();
    
    ctx.fillRect(300,100,100,150)
    
    ctx.strokeRect(500,100,100,150)

}