'use strict';
/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}.`
        console.log(output);
    }

    if(birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true;
        const str = `Oh, and you're a Millenial, ${firstName}`;
        console.log(str);

        function add(a, b) {
            return a + b;
        }
    };

    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);



const jonas = {
    firstName: "Jonas",
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);

        const isMillenial = ()=> {
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },

    greet: function() {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
}

jonas.greet();
jonas.calcAge();

*/

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

//Reference types
const jessica = {
    firstname: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before: ', jessica);
console.log('After: ', marriedJessica);

//Copying objects
const jessica2 = {
    firstname: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before: ', jessica2);
console.log('After: ', jessicaCopy);