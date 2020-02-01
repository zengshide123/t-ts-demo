interface Point {
    readonly x: number
    readonly y: number
}
// 对象第一次赋值后, 不能对只读属性值就行修改
let p1: Point = {
    x: 1,
    y: 1
}
let p2: Point
p2 = {
    x: 2,
    y: 2
}

