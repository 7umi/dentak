"use strict";
var engine,ctx;
var colors = ["yellow","green","orange","blue","white"];

function rand(v){
    return Math.floor(Math.random()*v);
}

function init(){
    var r;
    engine = new Engine(0,0,600,600,0,9.8);
    
    r = new RectangleEntity(500,100,50,400);
    r.color = "green";
    engine.entities.push(r);
    
    r = new RectangleEntity(0,50,50,400);
    r.color = "yellow";
    engine.entities.push(r);
    
    r = new LineEntity(50,250,400,350);
    r.color ="orange";
    engine.entities.push(r);
    
    r = new LineEntity(500,400,100,450);
    r.color ="orange";
    engine.entities.push(r);
    
    for(var i=0;i<7;i++){
        for(var j=0;j<2;j++){
            r = new CircleEntity(i*60+100,j*60+100,5,BodyStatic);
            r.color = colors[j];
            engine.entities.push(r);
        }
    }
    
    for(var i=0;i<500;i++){
        r = new CircleEntity(rand(400)+50,rand(200),2,BodyDynamic);
        r.color=colors[rand(5)];
        r.velocity.x = rand(2);
        r.velocity.y = rand(2);
        engine.entities.push(r);
    }
    
    ctx = document.getElementById("canvas").getContext("2d");
    setInterval(tick,50);
}

function tick(){
    engine.step(0.01);
    repaint();
}

function repaint(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,600,600);
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
