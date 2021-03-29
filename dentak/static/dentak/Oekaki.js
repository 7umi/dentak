var downX=0,downY=0,upX=0,upY=0;
var can;
var ctx; 
var drawing = false;

window.onload = function(){
    can = document.getElementById("can");
    ctx = can.getContext('2d');    
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    document.getElementById("can").onmousedown = mdown;
    document.getElementById("can").onmousemove=mmove;
    document.getElementById("can").onmouseup = mup;
}

function mdown(e){
    downX = e.offsetX;
    downY = e.offsetY;
    drawing = true;
}

function mmove(e){
    if(drawing == true){
    draw(ctx,downX,downY,e.offsetX,e.offsetY);
    downX = e.offsetX;
    downY = e.offsetY;
    }
}

function mup(e){
    upX = e.offsetX;
    upY = e.offsetY;
    drawing = false;
}

function draw(ctx,x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}

function blue(){
    ctx.strokeStyle = 'blue';
}
function red(){
    ctx.strokeStyle = 'red';
}
function black(){
    ctx.strokeStyle = 'black';
}
function green(){
    ctx.strokeStyle = 'green';
}
function yellow(){
    ctx.strokeStyle = 'yellow';
}
function white(){
    ctx.strokeStyle = 'white';
}
function futoi(){
    ctx.lineWidth = 5;
}
function chu(){
    ctx.lineWidth = 2.5;
}
function hoso(){
    ctx.lineWidth = 1;
}
function gatifuto(){
    ctx.lineWidth = 12;
}
