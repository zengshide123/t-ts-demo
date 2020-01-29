// 任意 (any)
let isAny: any = 123
isAny = '123'
isAny = true
isAny = () => { }
isAny = {}
// 在变量声明的同时没有指定类型注解
// 未赋值 那么变量的类型为 any
// 赋值 那么变量的类型为值类型

// isAny1 为 any 类型
let isAny1;
isAny1 = 1224
isAny1 = '123132'

// isAny2 为 数字 类型
let isAny2 = 1234
// 标红 报错
isAny2 = '12e31223'


