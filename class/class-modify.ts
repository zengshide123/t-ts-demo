export default class Animal {
    constructor(private name: string) {

    }
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m`)
    }
}

class Rhino extends Animal {
    constructor() {
        super('Rhino')
    }
}

class Employee {
    constructor(private name: string) {

    }
    move(distance: number = 5) {

    }
}

let animal = new Animal('Goat')
let rhino = new Rhino()
let employee = new Employee('Blob')

// name 的类型声明用的同一个源
animal = rhino
// name 的类型声明用的不是同一个源
animal = employee