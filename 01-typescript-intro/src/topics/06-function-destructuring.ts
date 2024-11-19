export interface Product {
    description: string;
    price: number;
}

const phone : Product = {
    description: 'Samsung Galaxy Tab S9',
    price: 999
};

const laptop : Product = {
    description: 'Apple MacBook Pro',
    price: 1299
};

export interface TaxCalculationsOptions {
    tax: number,
    products: Product[]
};

const tax = 0.15;
const shoppingCart = [phone, laptop];

const calcOptions1: TaxCalculationsOptions = {
    tax,
    products: shoppingCart
}

export const taxCalculator = (calcOptions1: TaxCalculationsOptions): [number,number] => {
    let total = 0;

    calcOptions1.products.forEach( (product: Product) => {
        total += product.price;
    });

    return [total, total * calcOptions1.tax];
};

const [total, taxAmount] = taxCalculator(calcOptions1);

console.log(`Total: ${total}, Tax Amount: ${taxAmount}`);

export {};