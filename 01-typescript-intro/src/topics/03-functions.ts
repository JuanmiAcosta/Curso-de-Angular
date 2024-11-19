function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(a:number, b?:number, c:number = 1): number {
    return a * c;
}

console.log(addNumbers(1, 2), addNumbersArrow(1, 2), multiply(2, 3), multiply(2));

// Objetos como parámetros
import { Player } from './02-object-interface';

const healPlayer = (player: Player, heal: number): void => {    
    player.hp += heal;
}   

const player1: Player = {
    name: 'Max',
    hp: 95,
    skills: ['Jump', 'Dash', 'Punch'],
    isAlive: true,
    showSkills: function() {
        console.log('Skills:', this.skills);
    }
};

healPlayer(player1, 5);

console.table(player1);

export {};