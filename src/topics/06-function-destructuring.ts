interface Product {
    descrition: string,
    price: number
}
const phone: Product = {
    descrition: 'Nokia',
    price: 150
}
const tablet: Product = {
    descrition: "iPad",
    price: 250
}
interface TaxCalculationsOptions {
    tax: number,
    products: Product[];
}

function taxCalculation( options: TaxCalculationsOptions ): number[] {

    let total = 0;

    options.products.forEach( product =>{
        total += product.price;
    });
    return [total, total * options.tax]
}
const shoppingCart = [phone, tablet];
const tax = 0.15;
const result = taxCalculation({
    products: shoppingCart,
    tax: tax,
})
console.log('Total', result[0]);
console.log('Tax', result[1]);

export {};