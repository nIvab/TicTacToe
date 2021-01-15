import game from "./modules/game.js";
import compPlayer from "./modules/ai.js"; // hmmm

const gameBox = document.querySelectorAll(".gameContainer");
const squares = document.querySelectorAll(".square");
console.log(squares);
const startButton = document.querySelector("#startGame");
const aiCheck = document.querySelector("#PVPorPVE");
const squareNew = document.querySelectorAll(".squareActive");

const [
    board,
    winConditions,
    PVPorPVE,
    startGame,
    turn,
    checkIfGameOver,
    emptyIndicies,
] = game();

function gameOverDude() {
    if (checkIfGameOver() != "game not over") {
        console.log("ITS OVER ANAKIN I HAVE THE HIGH GGROUND");
    } else {
        console.log("overdose on ketamine, I have");
    }
}

startButton.addEventListener("click", () => {
    squares.forEach((square) => {
        square.className += " squareActive";
    });

    if (aiCheck.checked) {
        var { player1, player2 } = PVPorPVE("PVE");
        console.log(checkIfGameOver());
        if (checkIfGameOver() === "game not over") {
            turn(player1, player2, sqaures);
        }
    } else {
        var { player1, player2 } = PVPorPVE("PVP");
        console.log(checkIfGameOver());
        if (checkIfGameOver() === "game not over") {
            turn(player1, player2, squares);
        }
    }
});

// ☭
