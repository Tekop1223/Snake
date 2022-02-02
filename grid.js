const GRID_SIZE = 26

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1, //formel som finder til sted på banen i x og y værdi
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE || //den her checker om snake rammer nogen af kanterne
        position.y < 1 || position.y > GRID_SIZE
    )
}