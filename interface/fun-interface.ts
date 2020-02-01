interface CompareFunc {
    (source: string, target?: number): boolean
}

const compareFunc: CompareFunc = (s, t): boolean => s.length > (t || 0)

console.log(compareFunc('12', 2))