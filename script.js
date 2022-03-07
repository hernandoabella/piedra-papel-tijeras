// Created by Youness Oubelkacem

window.onload = function(){

var computerScore = 0;
var userScore = 0;

const res = document.getElementById("res");

const computer = ["rock","paper","scissors"];

const userS = document.getElementById("userScore");

const computerS =document.getElementById("computerScore");

const rock = document.getElementById("r");

const paper= document.getElementById("p");

const scissors = document.getElementById("s");

const result = document.getElementById ("result");



function game(c){

    var computerChoice = computer[Math.round(Math.random()*2)];
    switch(c){
        case "r":
          if(computerChoice=="rock"){
              result.innerHTML="Computer Choice : "+computerChoice+ "<br/><br/>Draw";
          }
          else if(computerChoice=="paper"){
              result.innerHTML=`Computer Choice : ${computerChoice}<br/><br/>You Lose`;
              computerS.innerHTML = ++computerScore;
              document.getElementById("r").classList.add("red-glow");
              
setTimeout(()=>document.getElementById("r").classList.remove("red-glow"),1000);
          }
          else{
              result.innerHTML = "Computer Choice : "+computerChoice+ "<br/><br/>You Win";
              userS.innerHTML=++userScore;
              document.getElementById("r").classList.add("green-glow");
              
setTimeout(()=>document.getElementById("r").classList.remove("green-glow"),1000);
          }
        break;
        
        case "p":
        if(computerChoice=="paper"){
              result.innerHTML="Computer Choice : "+computerChoice+ "<br/><br/>Draw";
          }
          else if(computerChoice=="scissors"){
              result.innerHTML="Computer Choice : "+computerChoice+ "<br/><br/>You Lose";
              computerS.innerHTML = ++computerScore;
              document.getElementById("p").classList.add("red-glow");
              
setTimeout(()=>document.getElementById("p").classList.remove("red-glow"),1000);
              
          }
          else{
              result.innerHTML = "Computer Choice : "+computerChoice+ "<br/><br/>You Win";
              userS.innerHTML=++userScore;
              document.getElementById("p").classList.add("green-glow");
              
setTimeout(()=>document.getElementById("p").classList.remove("green-glow"),1000);
          }
        break;
        
        case "s":
        if(computerChoice=="scissors"){
              result.innerHTML="Computer Choice : "+computerChoice+ "<br/><br/>Draw";
          }
          else if(computerChoice=="rock"){
              result.innerHTML="Computer Choice : "+computerChoice+ "<br/><br/>You Lose";
              computerS.innerHTML = ++computerScore;
              document.getElementById("s").classList.add("red-glow");
              
setTimeout(()=>document.getElementById("s").classList.remove("red-glow"),1000);
          }
          else{
             
              result.innerHTML = "Computer Choice : "+computerChoice+ "<br/><br/>You Win";
              userS.innerHTML=++userScore;
              document.getElementById("s").classList.add("green-glow");
              
setTimeout(()=>document.getElementById("s").classList.remove("green-glow"),1000);
          }
        break;
    }
    
}

rock.addEventListener('click',function(){
        game("r");
    });
paper.addEventListener('click',function(){
        game("p");
    });
scissors.addEventListener('click',function(){
        game("s");
    });

res.addEventListener("click",()=>{
    computerScore = 0;
    userScore = 0;
    userS.innerHTML = "0";
    computerS.innerHTML = "0";
    result.innerHTML = "Make your move";
});



}
