class NewAnimal {
    move(distance: number = 0) {
        console.log(`Animal moved ${distance}m`)
    }
}
class Dog extends NewAnimal {
    bark() {
        console.log('Woof! Woof!')
    }
}

const dog = new Dog
dog.bark()
dog.move(12)