const skills: string[] = ['Jump', 'Dash', 'Punch'];

interface Player {
    name: string;
    hp: number;
    skills: string[];
    isAlive: boolean;
    showSkills?: () => void;
    home?: string;
}

const player1: Player = {
    name: 'Max',
    hp: 95,
    skills: skills,
    isAlive: true
};

player1.hp = 90;

console.table(player1);

export type {Player};