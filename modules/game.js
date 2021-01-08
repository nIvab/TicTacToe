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
        - utilise the minmax algorithm to find best moves to make  
*/

const createPlayer = (type, marker) => {
    return {type, marker} ; 
}
const game = () => {
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

    const PVPorPVE = (input) => {
        /* Checks to see if the user would like to play against a human or 
        against an AI. Then creates the appropriate players needed.*/
        if(input == "PVP"){
            const player1 = createPlayer("player", "X")
            const player2 = createPlayer("player", "O")
            return {player1, player2} ; 
        } else if(input == "PVE"){
            const player1 = createPlayer("computer", "O") ;
            const player2 = createPlayer("player", "X") ;
            return {player1, player2} ; 
        }
    }  

    const startGame = () => {
        board = [
            "e", "e", "e",
            "e", "e", "e",
            "e", "e", "e",
        ]; 
        turn(player1) ; 
    }


    const turnClick = (marker, divContainer) =>{
        divContainer.forEach(addEventListener("click", (sqaure) =>{
            sqaure.innerHTML = marker ; 
            sqaure.style.color = "white"
        }))
    }
    const turn = (player, divContainer) =>{
        if(checkIfGameOver!="game not over"){
            return checkIfGameOver() ; 
        } else{
            if(player == player1){
                turnClick(player.marker, divContainer)
                return turn(player2) ; 
            } else{
                turnClick(player.marker, divContainer)
                return turn(player1) ; 
            }
        }
    }

    const checkIfGameOver = () => {
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
            return "player 1 won" ;
        } else if(player2WinCheck == true){
            return "player 2 won" ; 
        } else if(drawWinCheck == true || emptySpaceCheck == false){
            return "it was a draw" ; 
        } else{
            return "game not over" ; 
        }
    }

    const emptyIndicies = () => {
        let indexArr = [] ;  
        for(i = 0 ; i < board.length() ; i++){
            if(board[i]=="e"){
                indexArr.push(i) ; 
            }             
        }
        return indexArr ; 
    }

    return{
            board, 
            winConditions,
            PVPorPVE, 
            startGame, 
            turn, 
            checkIfGameOver, 
            emptyIndicies
        }
}



export {createPlayer, game}