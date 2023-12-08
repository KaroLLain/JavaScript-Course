"use strict";

/*
let hasDriversLicense = false;
let passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log(`I can drive`);




function logger() {
    console.log(`My name is Jonas`);
}

// calling/ running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5, 9);
console.log(appleOrangeJuice);





//----------------function declaration

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age = calcAge1(1991);
console.log(age);

//----------------function expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age, age2);





//----------------arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntillRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retiremenr = 65 - age;
    //return retiremenr;

    return `${firstName} retire in ${retiremenr} years`
}

console.log(yearsUntillRetirement(1991, 'Jonas'));
console.log(yearsUntillRetirement(1998, 'Bob'));



function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieceses = cutFruitPieces(apples);
    const orangePieceses = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieceses} piece of apple and ${orangePieceses} pieces of orange.`
    return juice;
}

console.log(fruitProcessor(2, 3));



const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntillRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retire in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }
}

console.log(yearsUntillRetirement(1991, 'Jonas'));
console.log(yearsUntillRetirement(1970, 'Mike'));



const calcAverage = (a, b, c) => (a + b + c) / 3;

//Test1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if(avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`There is no winner!`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(111, 500);


//Test2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);


const friend1 = 'Michael';
const friend2 = 'Stephen';
const freind3 = 'Peter';

const friends = ['Michael', 'Stephen', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2007, 1568);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const jonas = ['Jonas' , 'Karo', 2037 - 1991, 'teacher', friends];
console.log(jonas);

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);




const friends = ['Michael', 'Stephen', 'Peter'];

//Add elements 
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);


friends.unshift('John');
console.log(friends);

//Remove elements
friends.pop(); //remove last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Stephen'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Stephen'));
console.log(friends.includes('23'));

if (friends.includes('Stephen')) {
    console.log(`You have a friend called Stephen`);
}



//Coding challange ARRAYS

const tip15 = .15;
const tip20 = .2;

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * tip15 : bill * tip20;
    
    //if(bill >= 50 && bill <= 300) {
    //    bill = bill * tip15;
    //} else {
    //    bill = bill * tip20;
    //}
    //return bill;
    
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(bills);
console.log(tips);
console.log(total);


const jonasArray = [
    'Jonas',
    'Karo',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Karo',
    birthYear: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

---------------------------------------------------------------------



const jonas = {
    firstName: 'Jonas',
    lastName: 'Karo',
    birthYear: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about jonas? Choose between firstName, lastName, age, job?');
console.log(jonas[interestedIn]);

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log(`Wrong request!`);
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonaskaro';
console.log(jonas);

//Challange

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

---------------------------------------------------------------------



const jonas = {
    firstName: 'Jonas',
    lastName: 'Karo',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDrivesLicense: true,

    //calcAge: function(birthYear) {
    //   return 2037 - birthYear;
    //}

    //calcAge: function() {
    //    console.log(this);
    //   return 2037 - this.birthYear;
    //}

    calcAge: function() {
        this.age = 2037 - this.birthYear;
       return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has
        ${this.hasDrivesLicense ? 'a' : 'no'} driver's license.`
    }

};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());



//--------------------------------------------------------------

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

}

mark.calcBMI();
john.calcBMI();
console.log(`${mark.bmi > john.bmi ? `${mark.fullName}'s BMI (${mark.bmi}) is heigher than ${john.fullName}'s(${john.bmi}).` : `${john.fullName}'s BMI (${john.bmi}) is heigher than ${mark.fullName}'s(${mark.bmi}).`}`);

//---------------------       LOOOOOOOOOP    -----------------------------------------



for(let rep = 1; rep <= 10; rep++ ) {
    console.log(`Lift no ${rep}`);
}


 

const jonas = [
    'Jonas',
    'Karo',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for(let i = 0; i < jonas.length ; i++) {
    console.log(jonas[i], typeof jonas[i]);
    
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
};

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
};

console.log(ages);

// continue and break
console.log(`---ONLY STRINGS---`);
for(let i = 0; i < jonas.length ; i++) {
    if(typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);

};

console.log(`---BREAK WITH NUMBER---`);
for(let i = 0; i < jonas.length ; i++) {
    if(typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);

};


const jonas = [
    'Jonas',
    'Karo',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];



for(let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`---------Starting Exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}

------------------------------------------------------------


//--------------------- WHILE LOOP ---------------------------

let rep = 1;
while (rep <= 10) {
    //console.log(`Lift no ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    let dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log(`Loop is about to end...`);
}



const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tips[i] + bills[i]);
    
}

console.log(totals, tips);

const calcAverage = function(arr) {
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}

console.log(calcAverage([2, 3, 6]));
console.log(calcAverage(totals));

*/

let num = 1;

const strong = function (x) {
  
  for (let i = 1; i < x; i++) {
    if(num !== x) { num *= i;}
  }
};

console.log(strong(5));
