// 源 布尔类型
let isDone: boolean = true
isDone = false
isDone = !!1
isDone = 2>1
// ts 包装过的布尔类型 (支持包装对象)
let isDone1: Boolean = true
isDone1 = false
isDone1 = !1
isDone1 = 2>1
isDone1 = new Boolean(1)



