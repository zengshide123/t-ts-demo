class User{
  public fullName: string;
  constructor(public firstName:string,public lastName:string){
    this.fullName = firstName + lastName
  }
}
interface Person {
  firstName:string
  lastName:string
}
function greeter(person:Person) {
  return `Hello ${person.firstName}-${person.lastName}`;
}

const user = new User('zeng','shide')

console.log(greeter(user));
