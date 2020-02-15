let passcode = 'secret passcode1'
class Employee {
    private _fullName!: string;
    get fullName(): string {
        return this._fullName
    }
    set fullName(newName: string) {
        if(passcode === 'secret passcode'){
            this._fullName = newName
        }else{
            console.log('Error: Unauthorized update of employee!')
        }
    }
}

let employee = new Employee
employee.fullName = 'Blob Smith'
employee.fullName && console.log(employee.fullName)