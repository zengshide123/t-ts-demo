const isArr: number[] = [1, 2, 3]

function sum([first, second, third]: number[]): number {
    return first + second + third
}
console.log(sum(isArr))

const [first, ...rest] = [1, 2, 1, 1, 1, 1, 1, 1]
console.log(first, rest)

const obj = {
    userSign: 'zengshide',
    age: 18
}

const { userSign } = obj
const { userSign: newUserSign, ...newObj } = obj
console.log(userSign, newUserSign, newObj)