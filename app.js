import game from "./modules/game.js"
import compPlayer from "./modules/ai.js" // hmmm

const gameBox = document.querySelectorAll(".gameContainer") ; 
const squares = document.querySelectorAll(".square")
console.log(squares)
const startButton = document.querySelector("#startGame")
const aiCheck = document.querySelector("#PVPorPVE") 

const {theGame} = game() ; 

startButton.addEventListener("click", ()=>{
    squares.forEach(square => {
        square.className = "squareActive"
    })

    if(aiCheck.checked){
        game().startGame(squares, "PVE") ; 
    }else{
        game().startGame(squares, "PVP")
    }
})