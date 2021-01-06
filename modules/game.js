
const game = () => {
    let board = [
        ["e","e","e"],
        ["e","e","e"],
        ["e","e","e"]
    ] ;  // e for empty, p for player, c for computer

    let gameRunning = true // as soon as game is initiated game is running 
    
    let checkIfEnd = (board) =>{
       board.array.forEach(row => {
           let playerSquares = row.filter(square => square == "p") ; 
           let compSquares = row.filter(square => square == "c") ; 
           let allNonEmptySquares = playerSquares.filter(square => square == "c") ; 
           if(playerSquares == row){
               return "Player Won!" ; 
           } else if(compSquares == row ){
                return "Computer Won!" ; 
           } else if(allNonEmptySquares.length < 3 ){
               return "Game not over yet!"
           } else{
               return "Draw!"
           }
        });
    }
       
        /*
        for(i=0; i<3 ; i++){
            for(j=0 ; j<3 ; j++){
                if(board[i][j] == "p" || board[i][j] == "e")
            }
        }
        */
    }
    
}