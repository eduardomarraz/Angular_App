export interface Product {
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

// function taxCalculation( options: TaxCalculationsOptions ): [number, number] {
// function taxCalculation( { tax, products}: TaxCalculationsOptions ): [number, number] {
export function taxCalculation( options: TaxCalculationsOptions ): [number, number] {

    const { tax, products} = options;
    let total = 0;

    products.forEach( ({price}) =>{
        total += price;
    });
    return [total, total * tax]
}
const shoppingCart = [phone, tablet];
const tax = 0.15;
const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax,
})
console.log('Total', total);
console.log('Tax', taxTotal);
