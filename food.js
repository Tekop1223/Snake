import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = randomGridPosition()
const EXPANSION_RATE = 3

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE) 
        food = randomGridPosition() // den her giver food en ny position
     
    }

}

export function draw(gameBoard) { // det her styre hvor food skal starte og gør så man kan se firkanten
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}



function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}