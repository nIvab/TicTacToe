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
    turnClick,
    turn,
    checkIfGameOver,
    emptyIndicies,
] = game();

function stuff(player, altPlayer) {
    function togglePlayer(player1, player2) {
        let currentPlayer = player1;
        if (player1.marker === "X") {
            currentPlayer = player2;
            console.log(currentPlayer);
            return currentPlayer;
        } else {
            currentPlayer = player1;
            console.log(currentPlayer);
            return currentPlayer;
        }
    }

    console.log(player.marker, togglePlayer(player, altPlayer));
    for (let i = 0; i < squares.length; i++) {
        if (board[i] == "e") {
            squares[i].addEventListener("click", (square) => {
                console.log(squares[i], squares[i].innerHTML);
                squares[i].innerHTML = `${player.marker}`; // X or O
                squares[i].disabled = true;
                board[i] = player.marker;
                console.log(board);

                let temp = player;
                player = altPlayer;
                altPlayer = temp;
                console.log(checkIfGameOver());
                gameOverDude();
            });
        }
    }
}

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
            stuff(player1, player2);
        }
    } else {
        var { player1, player2 } = PVPorPVE("PVP");
        console.log(checkIfGameOver());
        if (checkIfGameOver() === "game not over") {
            stuff(player1, player2);
        }
    }
});

// ☭
