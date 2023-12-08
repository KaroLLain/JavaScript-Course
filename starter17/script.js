
//Importing module
import cloneDeep from 'lodash';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
//import { addToCart, totalPrice as price, totalQuantity } from './shoppingCart.js';
//addToCart('bread', 5);
//console.log(price, totalQuantity);

// console.log('Importing module');

// import * as shoppingCart from './shoppingCart.js';
// shoppingCart.addToCart('bread', 5);
// console.log(shoppingCart.totalPrice);

// import add, {cart} from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 2);
// add('apples', 2);
// add('pears', 2);


// console.log(cart);

//const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//const data = await res.json();
//console.log(data);



const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5}
    ], 
    user: {loggedIn: true},
}

const cloneDeepState = cloneDeep(state);
state.user.loggedIn = false;


console.log(cloneDeepState);

if(module.hot) {
    module.hot.accept();
}

