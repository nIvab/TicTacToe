/* 
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
        - utilise the minmax algorithm to make the moves 
*/

const createPlayer = (type, marker) => {
    return {type, marker} ; 
}
const game = (initGame) => {
    let board = [
        "e", "e", "e",
        "e", "e", "e",
        "e", "e", "e",
    ];  // e for empty, p for player, c for computer

    let gameRunning = true // as soon as game is initiated game is running 

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
    ]

    function PVPorPVE(input){
        if(input == "PVP"){
            player1 = createPlayer("player", "X")
            player2 = createPlayer("player", "O")
        } else if(inpt == "PVE"){
            let chooser = Math.random() ; 
            if(chooser < 1/2){
                player1 = createPlayer("player", "X") ; 
                player2 = createPlayer("computer", "O") ; 
            } else { 
                player1 = createPlayer("computer", "O") ;
                player2 = createPlayer("player", "X") ;
            }
        }
    }  

    function checkIfGameOver() {
        //define flags for each outcome
        let player1WinCheck = false;
        let player2WinCheck = false;
        let drawWinCheck = false;   // need this to be true AND no empty spaces
        let emptySpaceCheck = false; // 1:  there is empty spaces 0: there is not

        for (i = 0; i < board.length(); i++) {
            if (board[i] == "e") {
                emptySpaceCheck = true;
            }
        }

        winConditions.forEach(winCond, windCond => {
            if (board[winCond[0]] == "X" && board[windCond[1]] == "X" && board[winCond[2]] == "X") {
                player1WinCheck = true;
                break;
            } else if (board[winCond[0]] == "O" && board[windCond[1]] == "O" && board[winCond[2]] == "O") {
                player2WinCheck = false;
                break;
            } else {
                drawWinCheck = true;
            }
        })

        if(player1WinCheck == true){
            return "player won" ;
        } else if(player2WinCheck == true){
            return "computer won" ; 
        } else if(drawWinCheck == true || emptySpaceCheck == false){
            return "it was a draw" ; 
        } else{
            return "game not over" ; 
        }
    }
}

export {createPlayer, game}