var WeightDate=[
    [30,-12,8,-6,-6,8,-12,30],
    [-12,-15,-3,-3,-3,-3,-15,-12],
    [0,-1,-1,-1,-1,-1,-1,0],
    [-1,-3,-1,-1,-1,-1,-3,-1],
    [-1,-3,-1,-1,-1,-1,-3,-1],
    [0,-1,-1,-1,-1,-1,-1,0],
    [-12,-15,-3,-3,-3,-3,-15,-12],
    [30,-12,8,-6,-6,8,-12,30],
]
var BLACK = 1,WHITE=2;
var date =[];
var myTurn = false;

window.onload = function(){
    var b = document.getElementById("board");
    
    for(var i = 0 ; i < 8 ; i++){
        var tr = document.createElement("tr");
        date[i] = [0,0,0,0,0,0,0,0];
        for(var j = 0 ; j < 8 ; j++){
            var td = document.createElement("td");
            td.className = "cell";
            td.id = "cell"+i+j;
            td.onclick = clicked;
            tr.appendChild(td);
        }
        b.appendChild(tr);
    }
    put(3,3,BLACK);
    put(4,4,BLACK);
    put(3,4,WHITE);
    put(4,3,WHITE);
    update();
}

function update(){
    var numWhite=0,numBlack=0;
    for(var x=0;x<8;x++){
        for(var y=0;y<8;y++){
            if(date[x][y]==WHITE){
                numWhite++;
            }
            if(date[x][y]==BLACK){
                numBlack++;
            }
        }
    }
    document.getElementById("numBlack").textContent=numBlack;
    document.getElementById("numWhite").textContent=numWhite;
    var blackflip = canFlip(BLACK);
    var whiteflip = canFlip(WHITE);
    if(numWhite+numBlack==64||(!blackflip&&!whiteflip)){
        if(numBlack>numWhite){
            showMessage("あなたの勝ち！！")
        }else if(numBlack<numWhite){
            showMessage("あなたの負け・・・")
        }else{
            showMessage("引き分け")
        }
    }
    else if(!blackflip){
        showMessage("黒スキップ");
        myTurn =false;
    }
    else if(!whiteflip){
        showMessage("白スキップ");
        myTurn =true;
    }
    else{
        myTurn = !myTurn;
    }
    if(!myTurn){
         setTimeout(think,1000);
    }
}

function showMessage(str){
    document.getElementById("message").textContent=str;
}

function think(){
    var highScore = -1000;
    var px=-1,py=-1;
    for(var x=0;x<8;x++){
        for(var y=0;y<8;y++){
            var tmpDate = copyDate();
            var flipped = getFlipCells(x,y,WHITE);
            if(flipped.length>0){
                for(var i=0;i<flipped.length;i++){
                    var p=flipped[i][0];
                    var q=flipped[i][1];
                    tmpDate[p][q]=WHITE;
                    tmpDate[x][y]=WHITE;
                }
                var score=calcWeightDate(tmpDate);
                if(score>highScore){
                    highScore=score;
                    px=x,py=y;
                }
            }
        }
    }
    if(px>=0&&py>=0){
        var flipped=getFlipCells(px,py,WHITE)
        if(flipped.length>0){
            for(var k=0;k<flipped.length;k++){
                put(flipped[k][0],flipped[k][1],WHITE);
            }
        }
        put(px,py,WHITE)
    }
    update();
}

function calcWeightDate(tmpDate){
    var score =0;
    for(var x=0;x<8;x++){
        for(var y=0;y<8;y++){
            if(tmpDate[x][y]==WHITE){
                score+=WeightDate[x][y];
            }
        }
    }
    return score;
}

function copyDate(){
    var tmpDate=[];
    for(var x=0;x<8;x++){
        tmpDate[x]=[];
        for(var y=0;y<8;y++){
            tmpDate[x][y]=date[x][y];
        }
    }
    return tmpDate;
}

function put(i,j,color){
    var c = document.getElementById("cell"+i+j);
    c.textContent="●";
    c.className='cell '+(color==WHITE?"white":"black");
    date[i][j]=color;
}

function clicked(e){
    if(!myTurn){
        return;
    }
    var id = e.target.id;
    var i = parseInt(id.charAt(4));
    var j = parseInt(id.charAt(5));
    var flipped = getFlipCells(i,j,BLACK);
    if(flipped.length>0){
        for(var k = 0;k < flipped.length;k++){
             put(flipped[k][0],flipped[k][1],BLACK);
        }
        put(i,j,BLACK);
        update();
        }
}

function canFlip(color){
    for(var x=0;x<8;x++){
        for(var y=0;y<8;y++){
            var flipped=getFlipCells(x,y,color);
            if(flipped.length>0){
                return true;
            }
        }
    }
    return false;
}

function getFlipCells(i,j,color){
    if(date[i][j]==BLACK||date[i][j]==WHITE){
        return [];
    }
    var dirs=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];
    var result=[];
    for(var p=0;p<dirs.length;p++){
        var flipped = getFlipCellsOneDir(i,j,dirs[p][0],dirs[p][1],color);
        result = result.concat(flipped)
    }
    return result;
}

function getFlipCellsOneDir(i,j,dx,dy,color){
    var x=i+dx;
    var y=j+dy;
    var fliped = [];
    if(x<0||y<0||x>7||y>7||date[x][y]==color||date[x][y]==0){
        return [];
    }
    fliped.push([x,y]);
    while(true){
        x += dx;
        y += dy;
        if(x<0||y<0||x>7||y>7||date[x][y]==0){
            return [];
        }
        if(date[x][y]==color){
            return fliped;
        }else{
            fliped.push([x,y]);
        }
    }
}
