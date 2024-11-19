import { Product, TaxCalculationsOptions, taxCalculator } from './06-function-destructuring';

const shoppingCart: Product[] = [];

const addProduct = (product: Product) => {
    shoppingCart.push(product);
};

const pr1: Product = {
    description: 'Samsung Galaxy Tab S9',
    price: 999
};

const pr2: Product = {
    description: 'Apple MacBook Pro',
    price: 1299
};

addProduct(pr1);
addProduct(pr2);

const tax = 0.15;
const calcOptions: TaxCalculationsOptions = {
    tax,
    products: shoppingCart
};

const [total, taxAmount] = taxCalculator(calcOptions);

console.log(`Total: ${total}, Tax Amount: ${taxAmount}`);

