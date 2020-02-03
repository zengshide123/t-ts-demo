interface Counter {
    (start: number): string
    interval: number
    reset(): void
}

function getCounter(): Counter {
    const counter: Counter = (s: number) => ('' + s)
    counter.interval = 122
    counter.reset = () => { }
    return counter
}

const c = getCounter()
console.log(c(3))
console.log(c)