

function addNumbers( a: number , b: number) {

    return(a + b);
}
//Funciona lambda
const addNumbersArrow = (a: number , b: number):string => {
    return `${a - b}`;
}
function multiply( firstNumber: number, secondNumber?: number, base: number = 2) {
return firstNumber * base;
}

// const result: string = addNumbers(1,2).toString();
// const result2: string = addNumbersArrow(1,2);
// const multiplyResult: number = multiply(5);

// console.log({result, result2, multiplyResult}); //Las llaves dentro de los parentesis sirven para ver  "objetos" por consola

interface Character{
    name: string;
    hp: number;
    showHp: () => any
}
const healCharacter = ( character: Character, amount: number ) =>{

    character.hp += amount;
}
const strider: Character ={
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp}`);        
    },
}
healCharacter( strider, 10);

strider.showHp();
export {};