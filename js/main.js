function scoreLeft() {
  var score=document.getElementById("btnScoreL").value;
  if (score==25) {
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
  if (score==25) {
    reset();
  }else {
    score++;
    document.getElementById("btnScoreR").value=score;
    inner("btnScoreR",score);
    if(score<=1)inner("game","Game Started!");
  }
}

function simulate(){
  var condition=true;
  while (condition) {
    if (document.getElementById("btnScoreL").value && document.getElementById("btnScoreR").value >=25) condition=false;
    var number=Math.floor((Math.random()*2)+1);
    if (number==1) scoreRight();
    else scoreLeft();
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
