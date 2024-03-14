// another example (decision tree thinking)
// rock, paper, scissors!!!
let playerOne = "rock";
let computer = "scissors";
////////////////////////////////////////////////////////////////////////////////
if (playerOne === computer) {
    console.log("Tie!!!"); //tie
} else if (playerOne === "rock") {
  if (computer === "paper") {
    console.log("you lose!!"); // computer wins!!
  } else {
    console.log("you win!"); // computer loses!
  }
} else if (playerOne === "paper") {
    if (computer === "scissors") {
        console.log("you lose!"); // computer wins!
    } else {
        console.log("you win!"); // computer loses!
    }
} else {
    if (computer === "rock") {
        console.log("you lose!"); // computer wins!
    } else {
        console.log("you win!"); // computer loses!
    }
}
////////////////////////////////////////////////////////////////////////////////////





















