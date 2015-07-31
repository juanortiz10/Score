function scoreLeft() {
  var score=document.getElementById("btnScoreL").value;
  if (score>=25) {
    inner("game","Left Team Winner");
    //document.getElementById("game").innerHTML="Left team Winner";
    reset();
  }else {
    score++;
    document.getElementById("btnScoreL").value=score;
    inner("btnScoreL",score);
    if(score<=1)inner("game","Game Started");
  }
}

function scoreRight(){
  var score=document.getElementById("btnScoreR").value;
  if (score>=25) {
    inner("game","Right Team Winner");
    reset();
  }else {
    score++;
    document.getElementById("btnScoreR").value=score;
    inner("btnScoreR",score);
    if(score<=1)inner("game","Game Started!");
  }
}

function simulate(){
  reset();
  var value=0,pointsL=0,pointsR=0;
  while(pointsL <25 || pointsR<25){
    value=Math.floor((Math.random()*2)+1);
    if (value==1) {
      pointsR++;
      points=document.getElementById("btnScoreR").value;
      inner("btnScoreR",pointsR);
      document.getElementById("btnScoreR").value=(pointsR);
    }else{
      points=document.getElementById("btnScoreL").value;
      pointsL++;
      inner("btnScoreL",pointsL);
      document.getElementById("btnScoreL").value=(pointsL);
      }
  }
}
function reset(){
  document.getElementById("btnScoreL").value=0;
  document.getElementById("btnScoreR").value=0;
  document.getElementById("btnScoreL").innerHTML=0;
  document.getElementById("btnScoreR").innerHTML=0;
  document.getElementById("game").innerHTML="No Game!";
}

function finish(){
  if(document.getElementById("btnScoreL").value>document.getElementById("btnScoreR").value){
    reset();
    inner("game","Left Team Winner");
  }else if(document.getElementById("btnScoreL").value<document.getElementById("btnScoreR").value){
    reset();
    inner("game","Right Team Winner");
    }else if(document.getElementById("btnScoreL").value==document.getElementById("btnScoreR").value){
      reset();
      inner("game","Tied");
    }
}

function inner(element,value){
  document.getElementById(element).innerHTML=value;
}
