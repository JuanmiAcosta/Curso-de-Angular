export function whatsMyType<T> (arg: T): T {
    return arg;
}

let myType = whatsMyType<number>(3);

let myType2 = whatsMyType<string>('Hello');

let myType3 = whatsMyType<boolean>(true);

console.log(myType, myType2, myType3);