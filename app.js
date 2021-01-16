import game from "./modules/game.js";
import compPlayer from "./modules/ai.js"; // hmmm

const gameBox = document.querySelector(".gameContainer");
const squares = document.querySelectorAll(".square");
console.log(squares);
const startButton = document.querySelector("#startGame");
const aiCheck = document.querySelector("#PVPorPVE");
const squareNew = document.querySelectorAll(".squareActive");
const gameOverDiv = document.querySelector("#gameOver");

const [
    winConditions,
    PVPorPVE,
    startGame,
    turn,
    checkIfGameOver,
    gameOverDude,
    checkIfResetNeeded,
    resetGame,
    emptyIndicies,
] = game();

startButton.addEventListener("click", () => {
    if (checkIfResetNeeded(squares) == false) {
        // when we first start the site
        squares.forEach((square) => {
            square.className = " squareActive";
        });
        // can turn this into a function
        if (aiCheck.checked) {
            var { player1, player2 } = PVPorPVE("PVE");
            console.log(checkIfGameOver());
            turn(player1, player2, sqaures, gameOverDiv);
        } else {
            var { player1, player2 } = PVPorPVE("PVP");
            turn(player1, player2, squares, gameOverDiv);
        }
    } else {
        // if we would like to reset
        if (aiCheck.checked) {
            resetGame("PVE", squares, gameBox, gameOverDiv);
        } else {
            resetGame("PVP", squares, gameBox, gameOverDiv);
        }
    }
});

// ☭
