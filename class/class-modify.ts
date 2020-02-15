export default class Person {
    constructor(protected name: string) {

    }
}
class Employee extends Person {
    constructor(name: string, private department: string) {
        super(name)
    }
    getElevatorPitch(){
        return `Hello, my name is ${this.name} and I wol in ${this.department}`
    }
}

let howard = new Employee('Howard','Sales')
// private 子类可以使用
console.log(howard.getElevatorPitch())
// private 实例不可以使用
// console.log(howard.name)
