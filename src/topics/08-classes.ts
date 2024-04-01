

export class Person {
    public name_vacio: string | undefined; //para no tener que inicializarla 
    public address_vacio?: string; //similar que arriva pero no igual

    // public name: string;
    // private address: string;

    constructor( 
        public name: string,
        private address?: string
        ) {}
}

// export class Hero extends Person {  

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super( realName, 'New York');
//     }
// }
export class Hero {  

    // public person: Person;
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        // this.person = new Person(realName);
    }
}
const tony = new Person('Tony', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log (ironman);

// export { Person }; en lugar de esto lo ponemos directamente arriba.