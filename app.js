import game from "./modules/game.js"
import compPlayer from "./modules/ai.js"

const gameBox = document.querySelectorAll(".gameContainer") ; 
const squares = document.querySelectorAll(".square")
console.log(squares)
const startButton = document.querySelector("#startGame")
const aiCheck = document.querySelector("#PVPorPVE") 

const {theGame} = game() ; 

startButton.addEventListener("click", ()=>{
    if(aiCheck.checked){
        theGame.startGame(squares, "PVE") ; 
    }else{
        game().startGame(squares, "PVP")
    }
    squares.forEach(square => {
        square.className = "squareActive"
    })
})