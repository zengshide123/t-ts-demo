function add(x: number, y: number): number {
    return x + y
}
let myAdd: (x: number, y: number) => number = (first, second) => {
    return first + second
} 