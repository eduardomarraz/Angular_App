import {Product, taxCalculation} from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        descrition: 'Nokia',
        price: 100
    },
    {
        descrition: 'iPad',
        price: 150
    }
];

// Tax = 0.15
const[ total, tax] = taxCalculation ({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total', total);
console.log('Tax', tax);

/* La idea es transformar estos archivos en modulos.
Estos modulos estan encapsulados pero unicamente lo que esta siendo exportado (con export {};) es lo que se expone al mundo exterior. (mundo exterior entendido como otros archivos de esta carpeta por ejemplo)
*/