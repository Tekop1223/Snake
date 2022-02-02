import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 8 // det her bestemmer hvor hurtigt "snake" skal bevæge
const snakeBody = [{ x: 13, y: 13}]  // det her bestemmer hvor lang snake skal være til at starte med
let newSegnemts = 0
export let snakeLength 
const scoreBoard = document.getElementById('score')

export function update() {
    addSegments()

    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }

    //det her sætter en til firkant foran så det ligner den bevæger sig
    snakeBody[0].x += inputDirection.x 
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) { // det her styre hvor snake skal starte og gør så man kan se firkanten
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function onSnake(position, {ignoreHead = false } = {}) { // det her gør så at når food er på food er på snake så skifter den position
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false 
        return equalPositions(segment, position)
    })
}

export function expandSnake(amount) { // den her er med til at gøre så man for en ekstra firkant 
    newSegnemts += amount
    snakeLength = snakeBody.length
    scoreBoard.textContent = `Score: ${snakeLength + 3}` 
}

export function getSnakeHead() { // den her bruges når man kun skal bruge "hovedet" eller den første firkant
    return snakeBody[0]
}

export function snakeIntersection() { // den her er med til at gøre så 
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() { // den her er med til at gøre så man for en ekstra firkant
   for (let i = 0; i < newSegnemts; i++) {
       snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
   }

   newSegnemts = 0 
}