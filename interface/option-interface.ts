interface Square {
    color: string
    area: number
}
interface SquareConfig {
    color?: string
    width?: number
}

function createSquare(config: SquareConfig): Square {
    let newSquare = {
        color: 'white',
        area: 100
    }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width ** 2
    }
    return newSquare
}

console.log(createSquare({
    color: 'red'
}))

console.log(createSquare({
    color: 'orange',
    width: 2
}))