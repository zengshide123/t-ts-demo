//ts 能够提供 代码自动补全 和 接口提示
//类型断言 可以获得断言类型的上述功能
const isString: any = 'this is a string'

console.log((<string>isString).length)
// tsx 文件 只能用这种方式断言
console.log((isString as string).length)