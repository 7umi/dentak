function calckitaichi(){
    //確率を取得
    var  kakuritu = document.getElementById("i0").value;
    //試行回数を取得
    var  kaisu = document.getElementById("i1").value;
    var a = Number(a);
    var result = Number(result);
    kakuritu = Number(kakuritu);
    kaisu = Number(kaisu);
    //確立を少数に直す
    kakuritu = kakuritu/100;
    var kakuritu2 = kakuritu
        for( var i =1; i < kaisu; i++ ){
            if(i==1){
            a = 1-kakuritu;
            a = a*kakuritu2;
            kakuritu =  a;
            }else{
            a = 1-kakuritu;
            a = a*kakuritu2;
            kakuritu = kakuritu + a
            }
        }
    result = kakuritu*100;
    result=Math.round(result);
    document.getElementById("kitaichi").innerHTML = "期待値は"+result+"%です。";
}