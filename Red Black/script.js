// const playerChoice = 
// const computerChoice 



// let red
// let black
// let playGame = confirm("Lets Play");
// if(playGame){
//   let playerChoice = prompt('enter red or black');
//   let playerOne = playerChoice.trim().toLowerCase();
//   if(playerOne === 'red' || playerOne === 'black'){
//       let computerChoice = Math.floor(Math.random() * 2 + 1);
//       let computer = computerChoice === 1 ? "red"
//       : "black";

//       let result = 
//       playerOne === computer ?  `player: ${playerOne}\n Computer: ${computer}\n
//       You win`
//       :`player: ${playerOne}\nComputer: ${computer}\n You lost`;
//       alert(result)

//   }else{
//     alert('enter red or black');
//   }                                              


// }else{
//   alert('coward');
// }


// const initGame = () => {
//   const startGame = confirm('shall we?');
//   startGame ? playGame() : alert('maybe next time')
// };

// // GameFlow

// const playGame = () => {
//   while(true){
//     let playerChoice = getPlayerChoice();
//     playerChoice = formatPlayerChoice()(playerChoice);

//     if (playerChoice === ''){
//       invalidChoice();
//       continue;
//     }
//     if(!playerChoice){
//       decideNotToplay();
//       break;
//     }
//     playerChoice = evaluatePlayerChoice(playerChoice);
//     if(!playerChoice) {
//       invalidChoice();
//       continue;
//     }
//     const computerChoice = getComputerChoice();
//     const result = determineWinner(playerChoice, computerChoice);
//     displayResult(result);
//     if(askToPlayAgain()){
//       continue;
//     } else {
//       thanksforPlaying();
//       break;
//     }

//   }
// };

// const getPlayerChoice = () => {
  
// }


let playGame = confirm('shall we?')
let message = document.getElementById('playing')
let choice = document.getElementById('red')
let secondChoice = document.getElementById('black')


if(playGame){
  message.textContent = 'Choose either red or black'

}else{
  alert(
    'maybe next time'
  )
}

function optionRed(){
  const flippED = document.getElementById('flip');
  if(choice){
    flippED.style.backgroundColor = 'green';
}
}


function optionBlack(){
const flippED = document.getElementById('flip');
const value = document.getElementById('result');
if(secondChoice){
flippED.style.transform = ' rotateY(180deg)';
value.innerText = 'Won, you chose black';
value.style.margin = '30px'

}else{
  confirm('you')
}

}