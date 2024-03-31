
const name: string = 'Strider';
let hpPoints: number | string = 95;
const isAlive: boolean = true;


hpPoints = 'FULL'

console.log({
    name, hpPoints , isAlive
})


export {};
/* La idea es transformar estos archivos en modulos.
Estos modulos estan encapsulados pero unicamente lo que esta siendo exportado (con export {};) es lo que se expone al mundo exterior. (mundo exterior entendido como otros archivos de esta carpeta por ejemplo)
*/