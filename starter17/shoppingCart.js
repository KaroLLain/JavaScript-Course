//Exporting module

console.log('Exporting module');


export const cart = [];


export const addToCart = function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${product} ${quantity} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity};

export default function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${product} ${quantity} added to cart`);
};