import compPlayer from "./ai.js";

const game = () => {
    let board = ["e", "e", "e", "e", "e", "e", "e", "e", "e"]; // e for empty, change each to X or O depending on how game transpires

    //if any of these cordinates are filled by either player game is over
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const createPlayer = (type, marker, number) => {
        return { type, marker, number };
    };

    const PVPorPVE = (input) => {
        console.log("PVP or PVE is running!");
        /* Checks to see if the user would like to play against a human or 
        against an AI. Then creates the appropriate players needed.*/
        if (input == "PVP") {
            const player1 = createPlayer("player", "X", 1);
            const player2 = createPlayer("player", "O", 2);
            return { player1, player2 };
        } else if (input == "PVE") {
            const player1 = createPlayer("player", "X", 1);
            const player2 = createPlayer("computer", "O", 2);
            return { player1, player2 };
        }
    };

    const turn = (player, altPlayer, divContainer) => {
        for (let i = 0; i < divContainer.length; i++) {
            if (board[i] == "e") {
                divContainer[i].addEventListener("click", (square) => {
                    console.log(divContainer[i], divContainer[i].innerHTML);
                    divContainer[i].innerHTML = `${player.marker}`; // X or O
                    divContainer[i].disabled = true;
                    board[i] = player.marker;
                    console.log(board);

                    let temp = player;
                    player = altPlayer;
                    altPlayer = temp;
                });
            }
        }
    };

    const checkIfGameOver = () => {
        //define flags for each outcome
        let player1WinCheck = false;
        let player2WinCheck = false;
        let drawWinCheck = false; // need this to be true AND no empty spaces
        let emptySpaceCheck = false; // 1:  there is empty spaces 0: there is not

        // for loop checks to see if there is any empty spaces (ie game still running
        // if none of win conditions are met )
        for (let i = 0; i < board.length; i++) {
            if (board[i] == "e") {
                console.log(board[i]);
                emptySpaceCheck = true;
            }
        }
        // check the indicies of each win condition against the board
        winConditions.forEach((winCond) => {
            if (
                board[winCond[0]] == "X" &&
                board[winCond[1]] == "X" &&
                board[winCond[2]] == "X"
            ) {
                player1WinCheck = true;
            } else if (
                board[winCond[0]] == "O" &&
                board[winCond[1]] == "O" &&
                board[winCond[2]] == "O"
            ) {
                player2WinCheck = true;
            } else {
                drawWinCheck = true;
            }
        });
        // return the results
        if (player1WinCheck == true) {
            return "player 1 won";
        } else if (player2WinCheck == true) {
            return "player 2 won";
        } else if (drawWinCheck == true && emptySpaceCheck == false) {
            return "it was a draw";
        } else {
            return "game not over";
        }
    };

    const emptyIndicies = () => {
        // returns array with indicies of empty spots
        let indexArr = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i] == "e") {
                indexArr.push(i);
            }
        }
        return indexArr;
    };

    return [
        board,
        winConditions,
        PVPorPVE,
        startGame,
        turn,
        checkIfGameOver,
        emptyIndicies,
    ];
};

export default game;
