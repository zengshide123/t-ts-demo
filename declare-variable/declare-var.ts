// declare var 在 ts 中,依旧存在变量提升
// declare var 在 ts 中,不能重复声明
declare var a: string
a = '12312'
b = 123
declare var b: number