'use strict';

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    header.addEventListener('click', () => {
        header.style.color = 'blue';
    });
})();


/*

/-----------------------------------------------------------------------

let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function() {
        console.log(`We are ow boarding all ${n} passengers`);
        console.log(`There are 3 groups, each wit ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

//_____________________________________________________________________

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
//____________________________________________________________________________________

const runOnce = function() {
    console.log('This will never run aain');
};
runOnce();

//IIFE Immediately Invoked Function Expressions (IIFE)
(function() {
    console.log('This will never run aain');
})();

(() => console.log('This will ALSO never run aain'))();


const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        //Get the answer
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));

        //Register answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if(type === 'array') {
            console.log(this.answers);
        } else {
            //Poll results are 13, 2, 4, 1
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};

//poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3]})

//§ Data 1: [5, 2, 3]
//§ Data 2: [1, 5, 3, 9, 6, 1]


//---------------------------------------------------------------------------------------------

const lufthans = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({fligh: `${this.iataCode}${flightNum}`, name});
    },
};

lufthans.book(239, 'Karo Knap');
lufthans.book(635, 'John Smith');
console.log(lufthans);


const euroWings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],

}

const book = lufthans.book;

//DOES NOT work
//book(23, 'Sarah Williams');

book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);

book.call(lufthans, 239, 'Mary Cooper');
console.log(lufthans);

//-----------------------------------BIND METHOD--------------------------------------
//book.call(euroWings, 23, 'Sarah Williams');

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthans);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Karo Knap');

//With Event Listener
lufthans.planes = 300;
lufthans.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
document.querySelector('.buy').addEventListener('click', lufthans.buyPlane.bind(lufthans));

//Partial application
const addTax = (rate, value) => value + value * rate;

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    }
};

console.log(addTax(200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addVAt2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(23));




//------------------------FUNCTIONS RETURNIG ANOTHER FUNCTIONS---------------------


//const greet = function(greeeting) {
//    return function(name) {
//        console.log(`${greeeting} ${name}`);
//   };
//};

//const greet = (greeeting) => (name) => console.log(`${greeeting} ${name}`);

const greet = greeeting => name => console.log(`${greeeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');


//------------------------CALLbaCK FUNCTIONS---------------------

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//Heigher order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);


//----------------------------------------------------------
const flight = 'LH234';
const jonas = {
    name: 'Karo Knap',
    passport: 22556688558,
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 22556688558) {
        alert('Check in') 
    } else {
        alert ('Wrong passport!')
    }
}

//checkIn(flight, jonas);
//console.log(flight);
//console.log(jonas);

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000000000);
}

newPassport(jonas);
checkIn(flight, jonas);

//--------------------------------------------------------

const bookings = [];

const createBooking = function(flightNum, 
                    numPassengers = 1, 
                    price = 199 * numPassengers) {
    // ES5
    //numPassengers = numPassengers || 1;
    //price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123')
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

*/