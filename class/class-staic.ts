export default class Grid {
    static origin = { x: 0, y: 0 }
    constructor(public scale: number) {
    }
    calculateDistanceFromOrigin(point: { x: number, y: number }) {
        let xDist = point.x - Grid.origin.x
        let yDist = point.y - Grid.origin.y
        return Math.sqrt(xDist ** 2 + yDist ** 2) * this.scale
    }
}
let grid1 = new Grid(1)
let grid2 = new Grid(5)

console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 4 }))
console.log(grid2.calculateDistanceFromOrigin({ x: 3, y: 4 }))
