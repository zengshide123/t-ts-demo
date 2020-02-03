class NewAnimal {
    name: string
    constructor(name: string) {
        this.name = name
    }
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m`)
    }
}
class Snake extends NewAnimal {
    constructor(name: string) {
        super(name)
    }
    move(dis: number = 5) {
        console.log('Slithering...')
        super.move(dis)
    }
}
class Horse extends NewAnimal {
    constructor(name: string) {
        super(name)
    }
    move(dis: number = 45) {
        console.log('Galloping...')
        super.move(dis)
    }
}
const snake = new Snake('snake')
const horse = new Horse('horse')

snake.move()
horse.move()