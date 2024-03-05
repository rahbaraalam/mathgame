var randomNumber1 = Math.floor(Math.random()*10)
var randomNumber2 =Math.floor(Math.random()*10)
var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
box1.innerHTML=randomNumber1
box2.innerHTML=randomNumber2
var answer = randomNumber1*randomNumber2
var counter = document.getElementById("score")
let score=0
function greet(){
    var username= document.getElementById("username").value
    var msg = document.getElementById("greetmsg")
    msg.innerHTML=`Good luck ${username}`
}
function checkAnswerMath(){
    var userValue = document.getElementById("userInp").value 
        
    for(var i=0;i==false;i++){
            if(userValue==answer){
                score=score+1
                counter.innerHTML=`Score :${score}`
                
                var randomNumber1 = Math.floor(Math.random()*10)
                var randomNumber2 =Math.floor(Math.random()*10)
                var box1 = document.getElementById("box1")
                var box2 = document.getElementById("box2")
                box1.innerHTML=randomNumber1
                box2.innerHTML=randomNumber2
                answer=randomNumber1*randomNumber2
            }
            else{
                counter.innerHTML=`Wrong, score : ${score}`
            }             
    }
}




