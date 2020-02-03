interface ClockInterface {
    currentTime: Date
    setTime(d: Date): void
}
class ClocK implements ClockInterface {
    currentTime!: Date
    constructor(h: number, m: number) {
        const now = new Date
        now.setHours(h)
        now.setMinutes(m)
        this.setTime(now)
    }
    setTime(d: Date) {
        this.currentTime = d
    }
}

console.log(new ClocK(2, 3))