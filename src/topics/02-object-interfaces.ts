const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strinder: Character = {
        name:'Strinder',
        hp: 100,
        skills: ['Bash','Counter'],
}

strinder.hometown = 'Rivendell';
console.table(strinder);

export {};