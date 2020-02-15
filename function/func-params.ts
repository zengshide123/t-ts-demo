// 可选参数必须放置在后面
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + ' ' + lastName
    } else {
        return firstName
    }
}

let result1 = buildName('Bob')
console.log('result1: ', result1);
