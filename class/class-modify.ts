class Person {
    constructor(readonly name: string){

    }
}

let  john = new Person('John')
// name 只能在实例化的时候初始化值
console.log(john.name)