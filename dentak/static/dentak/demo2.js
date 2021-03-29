"use strict";
var engine,ctx;
var colors = ["yellow","green","orange","blue","white"];
var movex =360;
var a;
var bx;
var by;

function rand(v){
    return Math.floor(Math.random()*v);
}

function init(){
    var r;
    engine = new Engine(0,0,800,800,0,0);
    
    r = new RectangleEntity(770,0,30,800);
    r.color = "black";
    engine.entities.push(r);
    
    r = new RectangleEntity(0,0,30,800);
    r.color = "black";
    engine.entities.push(r);
        
    r = new RectangleEntity(0,0,800,30);
    r.color ="black";
    engine.entities.push(r);    
    
    for(var i=0;i<20;i++){
        for(var j=0;j<10;j++){
            r = new RectangleEntity(i*30+100,j*30+100,30,30);
            r.color = colors[rand(4)];
            r.onhit = function(x,y){
                 engine.entities.pop(y);
            }
            engine.entities.push(r);
        }
    }
    
    r = new CircleEntity(400,600,10,BodyDynamic,1.001);
    r.color="green";
    r.velocity.x = 0;
    r.velocity.y = 0;
    r.onhit = function(x,y){
        if(y.shape==3){
            return;
        }else if(y.color=="black"){
            return;
        }else{
         var del =engine.entities.indexOf(y);
         engine.entities.splice(del,1);
        }
    }
    engine.entities.push(r);
    
    a = new RectangleEntity(movex,700,80,30);
    a.color ="black";
    engine.entities.push(a)
    
    ctx = document.getElementById("canvas").getContext("2d");
    document.getElementById("canvas").onmousemove=mmove;
    document.getElementById("canvas").onclick=mcli;
    setInterval(tick,50);
}

function tick(){
    engine.step(0.015);
    repaint();
}

function mmove(e){
    movex = e.offsetX;
    if(movex<70){
        movex = 70;
    }else if(movex>730){
        movex=730;
    }
}

function mcli(e){
    engine.entities.pop();
    var r;
    r = new CircleEntity(400,600,10,BodyDynamic,1);
    r.color="green";
    r.velocity.x = rand(10)+2;
    r.velocity.y = 15 ;
    engine.entities.push(r);
}

function repaint(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 800, 800);

    engine.entities.pop();
    a = new RectangleEntity(movex-40,700,80,30);
    a.color ="black";
    engine.entities.push(a);
    if(engine.entities.length==5){
       var canvas = document.getElementById('canvas');
       var str = 'クリア！！';   
       ctx.fillStyle = 'green';              // 塗りつぶしの色
       ctx.font = 'italic bold 80px serif';  // フォント
       ctx.textAlign = 'center';               // 配置
       ctx.fillText(str, 400, 300);
    }
    for(var i=0;i<engine.entities.length;i++){
        var e = engine.entities[i];
        ctx.fillStyle=e.color;
        ctx.strokeStyle=e.color;
        switch(e.shape){
           case ShapeRectangle:
              ctx.fillRect(e.x,e.y,e.w,e.h);
              break;
          case ShapeCircle:          
              ctx.beginPath();
              ctx.arc(e.x,e.y,e.radius,0,Math.PI*2);
              ctx.closePath();
              ctx.fill();
              break;
          case ShapeLine:
              ctx.beginPath();
              ctx.moveTo(e.x0,e.y0);
              ctx.lineTo(e.x1,e.y1);
              ctx.stroke();
              break;

        }
    }
}


