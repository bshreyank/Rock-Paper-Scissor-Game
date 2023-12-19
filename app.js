let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = ()=>{
    //storing choises in an array //rock, paper, scissors
    const option = ["rock","paper","scissors"];

    //choose randomly -- any number that is less than 0 if mul by 3 we get value in range between 0 to 2.
    //the above login can go with any number multiplication in place of 3. 
    //for example if we want any value in range of 0 to 9 we will multiply Math.random's function value with 10. 
    const randomIdx = Math.floor(Math.random() * 3);  //Math.floor - basically removes all the decimal values.
    
    return option[randomIdx];
};

const drawGame =()=>{
    msg.innerText = "Game was Draw !!! Play Again";
    msg.style.backgroundColor = "#081b31";
}

//Display Winner or Looser 
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        //update Score
        userScore++;
        userScorePara.innerText = userScore;

        //Win Button display
        msg.innerText = `You Win !!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;

        //Loose Button display
        msg.innerText = `You Loose !!! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}

//Display the Choices Computer and Player is selecting and also see if game is draw !!!
// if the game is not Draw put winning or loosing conditions.
const playGame = (userChoice) =>{
    //User Choice (Player selected button)
    //console.log("User choice = ", userChoice);
    
    //Generate Computer Choice. 
    const compChoice = genComputerChoice();

    //Draw Game
    if(userChoice === compChoice){
        drawGame();
    }else{
        //lets start by keeping user winner by default
        let userWin = true;
        
        // 1. If user chooses rock and computer chooses paper then computer will win, or user will remain winner.
        if(userChoice ==="rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
            
        }else if(userChoice==="paper"){
        // rock, scissors
            userWin = compChoice === "scissors"? false: true;
            
        }else if(userChoice ==="scissors"){
            //paper,rock
            userWin = compChoice === "rock"? false: true;
        }else{
            //rock, paper
            compChoice ==="rock" ? false : true;
        }

        //Display Winner or Looser 
        showWinner(userWin, userChoice, compChoice);
    }
}

// Player Choose the object - rock, paper, scissors.
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});