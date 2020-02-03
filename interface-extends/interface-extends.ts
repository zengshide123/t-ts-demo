interface Shape {
    color: string
}
interface PenStroke {
    penWidth: number
}
interface Square extends Shape, PenStroke {
    sideLength: number
}

let square = <Square>{}
square.color = 'tan'
square.sideLength = 10
square.penWidth = 1
console.log(square)
