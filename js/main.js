function scoreLeft() {
  var score=document.getElementById("btnScoreL").value;
  if (score>=25) {
    document.getElementById("game").innerHTML="Left team Winner";
    reset();
  }else {
    score++;
    document.getElementById("btnScoreL").value=score;
    document.getElementById("btnScoreL").innerHTML=score;
    if(score<=1)document.getElementById("game").innerHTML="Game started!";
  }
}

function scoreRight(){
  var score=document.getElementById("btnScoreR").value;
  if (score>=25) {
    document.getElementById("game").innerHTML="Right team Winner";
    reset();
  }else {
    score++;
    document.getElementById("btnScoreR").value=score;
    document.getElementById("btnScoreR").innerHTML=score;
    if(score<=1)document.getElementById("game").innerHTML="Game started!";
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
    document.getElementById("game").innerHTML="Left Team Winner";
  }else{
    reset();
    document.getElementById("game").innerHTML="Right Team Winner";
    }
}
