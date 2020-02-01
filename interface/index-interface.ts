// 数字索引 必须是 字符串索引的子类型
interface IndexArray {
    [a: number]: any
}

let myArr: IndexArray
myArr = ['zeng', 'shi', 'de']

console.log(myArr['1'])
console.log(myArr[0])

class Animal {
    constructor(public name: string) {
    }
}
class Cat extends Animal {
    constructor(public breed: string) {
        super('cat')
    }
}

interface NotContainRelation {
    [index: number]: Cat
    [index: string]: Animal
}

interface ReadonlySign {
    readonly [index: number]: number
}
let isReadonlyArr: ReadonlySign = [1, 2, 3, 4]
isReadonlyArr['0'] = 2
// 只能限制数字签名为只读 
// 报错
// isReadonlyArr[0] = 1
console.log(isReadonlyArr[0])

