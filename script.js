var p =0;
var c = 0;

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let r = Math.floor(Math.random() * (3));
  let i;
  return i = choices[r];
}

function playRound(playerSelection, computerSelection) {
  
   player = playerSelection.toLowerCase();
   computer = computerSelection.toLowerCase();

   let result = "";

    if (player === computer){
      result = "TIE, let's play again";
      }
    // I am Rock
    else if (player=="rock" && computer=="scissors") {
      p++;
       result = "You WIN!, Rock beats Scissors"
    }
    else if (player=="rock" && computer=="paper") {
      c++;
      result = "You LOSE!, Paper beats Rock"
    }
    // I am Paper
    else if (player=="paper" && computer=="rock") {
      p++;
      result = "You WIN!, Paper beats Rock"
    }
    else if (player=="paper" && computer=="scissors") {
      c++;
      result = "You LOSE!, Scissors beats Paper"
    }
    // I am Scissors
    else if (player=="scissors" && computer=="paper") {
      p++;
      result = "You WIN!, Scissors beats Paper"
    }
    else if (player=="scissors" && computer=="rock") {
      c++
      result = "You LOSE!, Rock beats Scissors"
    }
    whoWon(result);
    currentResult();
  }

function whoWon(result) {
  let resultDisplay = document.getElementById('resultDisplay');
  let resultParagraph = resultDisplay.querySelector('p');


    // If the paragraph doesn't exist, create it
    if (!resultParagraph) {
        resultParagraph = document.createElement('p');
        resultDisplay.appendChild(resultParagraph);
    }

    // Update the text content of the paragraph
    resultParagraph.textContent = result;
}

function currentResult() {
    let scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.innerHTML = "Current Results:<br>User " + p + "<br>Computer " + c;
}
function startNewGame() {
  p = 0;
  c = 0;

  let resultDisplay = document.getElementById('resultDisplay');
  let resultParagraph = resultDisplay.querySelector('p');
  
  // IF it's not null or undefined aka IF it has value 
  if (resultParagraph) {
    resultParagraph.textContent = "";
  }
currentResult();
  // Enable buttons
  document.querySelector('.rock_Button').disabled = false;
  document.querySelector('.paper_Button').disabled = false;
  document.querySelector('.scissors_Button').disabled = false;
}


function game(playerSelection, computerSelection) {
  if (p === 5 || c === 5) {
    let gameOver = document.createElement('div');
    let gameOverText = document.createElement('p');
    gameOver.appendChild(gameOverText);

    document.getElementById('scoreDisplay').parentNode.insertBefore(gameOver, document.getElementById('scoreDisplay').nextSibling);

    if (p === 5) {
      gameOverText.textContent = "YOU FUCKING DID IT!!! YOU WON";
    } else {
      gameOverText.textContent = "L O S E R";
    }

    // Disable buttons during the alert
    document.querySelector('.rock_Button').disabled = true;
    document.querySelector('.paper_Button').disabled = true;
    document.querySelector('.scissors_Button').disabled = true;

    // Ask for confirmation and start a new game
    setTimeout(function () {
      if (confirm("Click OK to play again")) {
        startNewGame();
      }
    }, 10);
  }
}


let btn1 = document.querySelector('.rock_Button');
let btn2 = document.querySelector('.paper_Button');
let btn3 = document.querySelector('.scissors_Button');


btn1.addEventListener('click', () =>{
  const playerSelection = "rock";
  let computerChoice = getComputerChoice()
  playRound(playerSelection, computerChoice);
  game(playerSelection, computerChoice);
}
)
btn2.addEventListener('click', () =>{
  const playerSelection = "paper";
  let computerChoice = getComputerChoice()
  playRound(playerSelection, computerChoice);
  game(playerSelection, computerChoice);
}
)
btn3.addEventListener('click', () =>{
  const playerSelection = "scissors";
  let computerChoice = getComputerChoice()
  playRound(playerSelection, computerChoice);
  game(playerSelection, computerChoice);
}
)


