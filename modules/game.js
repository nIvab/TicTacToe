/* 
There might be a bit too much going on here 
Some quick notes:
    What do I want the class game to do?
        - construct the board we will be playing on  /d
        - create the appropriate players (human and computer or pvp) 
        - check if the game is won and who has won /d
        - reset the board if needed 
        - whos turn it is (X or O)
    What do I want the class player to do? 
        - keep track what kind of player it is (human or comp)
        - keep track of what moves they have made (may be redundant because of game board)
    What do I want the human player class to do? 
        - make moves 
    What do I want the computer player class to do? 
        - make moves 
        - utilise the minmax algorithm to find best moves to make  
*/
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

    // tightly coupled with turn() and startGame()
    const turnClick = (marker, divContainer) => {
        console.log("turnClick");
        if (board[i] == "e") {
            divContainer.innerHTML = marker; // X or O
            if (marker == "X") {
                board[i] = "X";
            } else if (marker == "O") {
                board[i] = "O";
            }
        }
    };

    // tightly coupled with startGame() and turnClick()
    const turn = (player, altPlayer, divContainer) => {
        if (checkIfGameOver() !== "game not over") {
            console.log(checkIfGameOver());
            return checkIfGameOver();
        } else {
            turnClick(player.marker, divContainer);
            console.log(divContainer);
            debugger;
            turn(altPlayer, player, divContainer);
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
        turnClick,
        turn,
        checkIfGameOver,
        emptyIndicies,
    ];
};

export default game;
