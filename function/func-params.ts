function buildName(firstName: string, lastName = 'Rechial'): string {
    return firstName + ' ' + lastName
}

let result1 = buildName('Bob')
console.log('result1: ', result1);
let result2 = buildName('John', 'Smith')
console.log('result2: ', result2);
