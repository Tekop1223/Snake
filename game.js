import { update as updateSnake, draw as drawSnake, SNAKE_SPEED,
getSnakeHead, snakeIntersection, snakeLength} from './snake.js'
import { update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid } from './grid.js'



let lastRenderTime = 0
let gameOver = false
let youWon = false
const gameBoard = document.getElementById('game-board')
var hasWon = false

function main(currentTime) {
    if (gameOver) { // det her er laver gameOver skærmen
        if (confirm('GAME OVER. Tryk OK for at prøve igen')) {
            window.location = '/' // den her refresher fanen eller koden
        }
    return
    }

    window.requestAnimationFrame(main) 
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 //converter det consolen logger til sekunder
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return //hvis snakes hastighed er mindre en 1 / SNAKE_SPEED så skal den ikke bevæge sig
    
    lastRenderTime = currentTime // updatter lastRenderTime til currentTime

    update()
    draw()   
}


window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
    CheckWin()
}

function draw() {
    gameBoard.innerHTML = '' //det her fjerner den sidste firkant så det ligner at den bevæger sig
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection() // det her gør så hvis enten outSideGrid eller snakeIntersection bliver true er det gameOver
}

function CheckWin() {
   if (snakeLength + 2 >= 10  && !hasWon) {
    confirm("are you the devil himself?")
    hasWon = true
    window.location = "/youWon.html"
   }
   return
}

