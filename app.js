var UserScore=0;
var ComputerScorer=0;
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissor_div = document.getElementById("s");
var userScore_span =document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var result_p = document.querySelector(".result>p");

function main()
{
    rock_div.addEventListener('click', function(){
    game("r");
})

paper_div.addEventListener('click', function(){
    game("p");
})

scissor_div.addEventListener('click', function(){ 
    game("s");
})
    
}
main();

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissors";
}
function getcomputerchoice()
{
     const choices=['r','p','s'];
    const randomNumber = Math.floor(Math.random()* 3);
    return choices[randomNumber];
}

function win(user , computer){
    UserScore++; 
    userScore_span.innerHTML=UserScore; 
    computerScore_span.innerHTML = ComputerScorer;
    result_p.innerHTML= convertToWord(user) +" beats "+ convertToWord(computer) +" . YOU WINS";
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('green-glow')},1000);
}
function lose(user , computer){
    ComputerScorer++;
     userScore_span.innerHTML=UserScore; 
    computerScore_span.innerHTML = ComputerScorer;
    result_p.innerHTML= convertToWord(user) +" looses to "+ convertToWord(computer) +" . YOU LOST..";
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('red-glow')},1000);
}

function draw(user , computer){
     //userScore_span.innerHTML=UserScore; 
    //computerScore_span.innerHTML = ComputerScorer;
    result_p.innerHTML= convertToWord(user) +" equals "+ convertToWord(computer) +" . It's a Draw";
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('gray-glow')},1000);
}


function game(userchoice){
    const computerChoice = getcomputerchoice();
    switch(userchoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            //console.log("User Wins");
            win(userchoice, computerChoice); 
            break;
        case "rp":
        case "ps":
        case "sr":
            //console.log("User Looses");
            lose(userchoice, computerChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            //console.log("Its a Draw");
            draw(userchoice, computerChoice);
            break;
    }
}
