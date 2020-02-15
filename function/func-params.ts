function buildName(firstName: string, lastName = 'Rechial'): string {
    if (lastName) {
        return firstName + ' ' + lastName
    } else {
        return firstName
    }
}

let result1 = buildName('Bob')
console.log('result1: ', result1);
