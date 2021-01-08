import game from "./game.js"

const compPlayer = ()=>{
    const {currentGame} = game() ; 
    const {aiPlayer, huPlayer} = PVPorPVE("PVE") ; 

    function minimax(calcBoard, player){
        let emptySpots = emptyIndicies(calcBoard) ; 

        //set up base cases for recursion 
        if(currentGame.checkIfGameOver() == "it was a draw"){
            return {score:0} ; 
        } else if(currentGame.checkIfGameOver() == "player 1 won"){ //human wins 
            return{score:10} ;
        } else if(currentGame.checkIfGameOver() == "player 2 won"){ // AI wins
            return{score:-10} ; 
        }
        let moves = [] ; 
        for(i = 0 ; i < emptySpots.length ; i++){
            let currentMove = {} ;
            currentMove.index = calcBoard[emptySpots[i]] ; 
            board[emptySpots[i]] = player.marker ; 
            if(player.type = "computer"){
                let result = minimax(calcBoard, huPlayer)
                currentMove.score = result.score ; 
            } else {
                let result = minimax(calcBoard, aiPlayer) ; 
                moves.score = result.score ;    
            }

            calcBoard[emptySpots[i]] = currentMove.index ; 

            moves.push(currentMove) ; 
        }

        let bestMove ; 
        if(player == aiPlayer){
            let bestScore = -10000 ; 
            for(i = 0 ; i < moves.length ; i++){
                if(moves[i].score < bestScore){
                    bestScore = moves[i].score ; 
                    bestMove = i ; 
                }
            }
        } else {
            let bestScore = 10000 ; 
            for(i = 0 ; i < moves.length ; i++){
                if(moves[i].score < bestScore){
                    bestScore = moves[i].score ; 
                    bestMove = i ; 
                }
            }
        }
        return moves[bestMove] ; 
    }
}