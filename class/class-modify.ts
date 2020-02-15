export default class Animal {
    constructor(private name:string){

    }
    move(distance:number = 0){
        console.log(`${this.name} moved ${distance}m`)
    }
}

const cat = new Animal('cat')
cat.move(5)