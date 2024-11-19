function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
export class Superclass{

    public property: string = 'property';

    constructor(){
        console.log('Superclass constructor called');
    }

    public method(){
        console.log('Superclass method called');
    }
}

let obj = new Superclass();
console.log(obj);