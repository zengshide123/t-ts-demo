class Greeter {
    greeting: string
    constructor(mes: string) {
        this.greeting = mes
    }
    greet() {
        return `Hello, ${this.greeting}`
    }
}

const newGreeter = new Greeter('world')
console.log(newGreeter.greet())