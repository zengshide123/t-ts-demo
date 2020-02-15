// 抽象类
export default abstract class Department {
    constructor(public name: string) {

    }
    printName(): void {
        console.log('Department name' + this.name)
    }
// 抽象方法
    abstract printMeeting(): void
}
// 派生类必须实现抽象类的抽象方法
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting ad Auditing')
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am')
    }
    genterateReports(): void {
        console.log('Generating accounting reports...')
    }
}

let department: AccountingDepartment;
department = new AccountingDepartment
department.printName()
department.printMeeting()
department.genterateReports()
