function buildName(firstName: string, ...restOfName: Array<string>): string {
    return firstName + ' ' + restOfName.join(' ')
}

let result1 = buildName('Bob')
console.log('result1: ', result1)
let result2 = buildName('John', 'Smith')
console.log('result2: ', result2)
let result3 = buildName('zeng', 'shi', 'de')
console.log('result3: ', result3);

