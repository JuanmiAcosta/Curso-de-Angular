export class Person {
    private _name: string;
    private _age: number;
    private _email: string;

    constructor(name: string, age?: number, email: string = '') {
        this._name = name;
        this._age = age ? age : 0;
        this._email = email;
    }
}

export class Employee extends Person {
    private _employeeId: number;

    constructor(name: string, age?: number, email: string = '', employeeId: number = 0) {
        super(name, age, email);
        this._employeeId = employeeId;
    }

    get employeeId(): number {
        return this._employeeId;
    }

    set employeeId(employeeId: number){
        this._employeeId = employeeId;
    }

    public toString(): string {
        return `Employee: ${this._employeeId}`;
    }
}

const person1 = new Person('John Doe', 30);
const employee1 = new Person('Jane Doe', 25, 'jane@gmail.com');

console.table(person1);