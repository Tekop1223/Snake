let inputDirection = { x: 0, y: 0}
let lastInputDirection = { x: 0, y: 0}
const gameBoard = document.getElementById('game-board')


window.addEventListener('keydown', e => { // det her styre hvad jeg kan trykke for at gøre et handling
    switch (e.key) { // y er op og ned // x er til venstre og højre
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break // det her gøre hvis den lastInputDirection er y skal den break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break // det her gøre hvis den lastInputDirection er x skal den break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
        case 'w':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case 's':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'a':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'd':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection //det er med til at gøre så hvis man trykker "w" kan ikke går ned af osv
    return inputDirection
}

