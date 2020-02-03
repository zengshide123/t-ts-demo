// 实例的接口描述
interface ClockInterface {
    tick(): void
}
// 构造器的接口描述
interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface
}
function createClock(Ctor: ClockConstructor, h: number, m: number): ClockInterface {
    return new Ctor(h, m)
}
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {

    }
    tick() {
        console.log('beep beep')
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {

    }
    tick() {
        console.log('tick toc')
    }
}

const digital = createClock(DigitalClock, 12, 12)
const analog = createClock(AnalogClock, 13, 13)

console.log(digital)
console.log(analog)