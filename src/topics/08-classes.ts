

export class Person {
    public name_vacio: string | undefined; //para no tener que inicializarla 
    public address_vacio?: string; //similar que arriva pero no igual

    // public name: string;
    // private address: string;

    constructor( 
        public name: string,
        private address: string
        ) {}
}

const ironman = new Person('Ironman', 'New York');

console.log (ironman);

// export { Person }; en lugar de esto lo ponemos directamente arriba.