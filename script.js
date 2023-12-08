/*
let js = 'amazing';
console.log(40 + 8 + 83 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);



let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Karo");

javaScriptIsFun = "YES";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

var  job = "programmer";
job = "teacher";


--------------------------------------------------


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageKaro = now - 1987;
console.log(ageJonas, ageKaro);

console.log(ageKaro * 2, ageKaro / 2, 2 ** 3);

const firstName = "Jonas";
const lastName = "Karo";
console.log(firstName + " " + lastName);


//Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25;
x *= 4; // x = x * 4 = 100;
x ++;
x --;
x --;
console.log(x);

// Comparison operators
console.log(ageKaro > ageJonas);
console.log(ageKaro < ageJonas);
console.log(ageKaro >= 18);
console.log(ageKaro <= 18);

const isFullAge = ageKaro >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 1987);

----------------------------------------


const now = 2037;
const ageJonas = now - 1991;
const ageKaro = now - 1987;

console.log(now - 1991 > now - 1987);

console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageKaro + ageJonas) / 2;
console.log(ageKaro, ageJonas, averageAge);



const marksWeight1 = 78;
const marksWeight2 = 95;
const marksHeight1 = 1.69;
const marksHeight2 = 1.88;

const johnWeight1 = 92;
const johnWeight2 = 85;
const johnHeight1 = 1.95;
const johnHeight2 = 1.76;

const marksAverageWeight = (marksWeight1 + marksWeight2) / 2;
const marksAverageHeaight = (marksHeight1 + marksHeight2) / 2;

const johnAverageWeight = (johnWeight1 + johnWeight2) / 2;
const johnAverageHeight = (johnHeight1 + johnHeight2) / 2;

const marksBmi = marksAverageWeight / marksAverageHeaight ** 2;
const johnsBmi = johnAverageWeight / johnAverageHeight ** 2;

const markHigherBmi = marksBmi > johnsBmi;

console.log(marksAverageWeight);
console.log(marksAverageHeaight);
console.log(johnAverageWeight);
console.log(johnAverageHeight);
console.log(marksBmi);
console.log(johnsBmi);
console.log(markHigherBmi);

__________________________________________________



const firstName = "Jonas";
const job = "Teacher";
const birthYear = 1991;
const year = 2037;


const jonas = "I'm " + firstName + ", a " + (year - birthYear)
+ " year old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);



// _______________if else controle structure______________
const age = 15;

if(age >= 18) {
    console.log(`Sara can start driving license`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. Wait another ${yearsLeft} years.`)
}

const birthYear = 2012;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);




const marksWeight1 = 78;
const marksWeight2 = 95;
const marksHeight1 = 1.69;
const marksHeight2 = 1.88;

const johnWeight1 = 92;
const johnWeight2 = 85;
const johnHeight1 = 1.95;
const johnHeight2 = 1.76;

const marksBmi = marksWeight1 / marksHeight1 ** 2;
const johnsBmi = johnWeight1 / johnHeight1 ** 2;

const marksBmi2 = marksWeight2 / marksHeight2 ** 2;
const johnsBmi2 = johnWeight2 / johnHeight2 ** 2;


if(marksBmi>johnsBmi) {
    console.log(`Marks BMI ${marksBmi} is higher than John's BMI ${johnsBmi}!`);
} else {
    console.log(`John's BMI ${johnsBmi} is higher than Mark's BMI ${marksBmi}`);
}

if(marksBmi2>johnsBmi2) {
    console.log(`Marks BMI ${marksBmi2} is higher than John's BMI ${johnsBmi2}!`);
} else {
    console.log(`John's BMI ${johnsBmi2} is higher than Mark's BMI ${marksBmi2}`);
}


//type convertion
const inputYear = '1991';

console.log(Number(inputYear));

console.log(String(23));


//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n);




// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;
if(money) {
    console.log(`Don't spend it all`);
} else {
    console.log(`You should get a job`);
}

let height;
if(height) {
    console.log(`YEY`);
} else {
    console.log(`UNDEFINED`);
}



const age = 18;

if(age === 18) {
    console.log(`You just became an adult (strict)`);
}

if(age == 18) {
    console.log(`You just became an adult (loose)`);
}


const favourite = Number(prompt("Whats your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) {
    console.log(`Cool! 23 is an amazing number`)
} else if(favourite === 7) {
    console.log(`7 is also cool number`)
} else {
    console.log(`Number is not 23 or 7`)
}

if(favourite !== 23) console.group(`Why 9
not 23?`)


const hasDriversLicense = true;
const hasGoodVision = true;


console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if(hasDriversLicense && hasGoodVision) {
    console.log(`Sarah is able to drive`);
} else {
    console.log(`Someone else shold drive...`);
}

const ifTired = true;
console.log(hasDriversLicense && hasGoodVision && ifTired);

if(hasDriversLicense && hasGoodVision && !ifTired) {
    console.log(`Sarah is able to drive`);
} else {
    console.log(`Someone else shold drive...`);
}



// Coding Challange 3

const averageDolphinsScore = (96 + 108 + 89)/3;
const averagCoalasScore = (88 + 91 + 110)/3;

if(averageDolphinsScore > averagCoalasScore) {
    console.log(`The winner is Dolphins! ${averageDolphinsScore}`);
} else if(averageDolphinsScore === averagCoalasScore) {
    console.log(`There is a draw ${averageDolphinsScore} ${averagCoalasScore}`);
} else {
    console.log(`The winner is Coalas! ${averagCoalasScore}`);
}

const averageDolphinsScore1 = (97 + 112 + 101)/3;
const averagCoalasScore1 = (109 + 95 + 123)/3;
const minimumScore = 100;

if(averageDolphinsScore1 > averagCoalasScore1 && averageDolphinsScore1 >= minimumScore) {
    console.log(`The winner is Dolphins! ${averageDolphinsScore1}`);
} else if(averagCoalasScore1 > averageDolphinsScore1 && averagCoalasScore1 >= minimumScore) {
    console.log(`The winner is Coalas! ${averagCoalasScore1}`);
}

const averageDolphinsScore2 = (97 + 112 + 101)/3;
const averagCoalasScore2 = (109 + 95 + 106)/3;

if(averageDolphinsScore2 > averagCoalasScore2 && averageDolphinsScore2 >= minimumScore) {
    console.log(`The winner is Dolphins! ${averageDolphinsScore2}`);
} else if(averagCoalasScore2 > averageDolphinsScore2 && averagCoalasScore2 >= minimumScore) {
    console.log(`The winner is Coalas! ${averagCoalasScore2}`);
} else if(averageDolphinsScore2 === averagCoalasScore2 && averageDolphinsScore2 >= minimumScore 
            && averagCoalasScore2 >= minimumScore) {
                console.log(`There is a draw Dolpins: ${averagCoalasScore2} Coalas: ${averageDolphinsScore2}`);
            }
            

const day = 'thursday';

switch(day) {
    case 'monday': // day === monday
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case 'tuesday':
        console.log(`Preapare theory videos`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Write code examples`);
        break;
    case 'friday':
        console.log(`Record videos`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend!`);
        break;
    default:
        console.log(`Not a valid day`);
}

if(day === 'monday') {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if(day === 'tuesday') {
    console.log(`Preapare theory videos`);
} else if(day === 'wednesday' || day === 'thursday') {
    console.log(`Write code examples`);
} else if(day === 'friday') {
    console.log(`Record videos`);
} else if(day === 'saturday' || day === 'sunday') {
    console.log(`Enjoy the weekend!`);
} else {
    console.log(`Not a valid day`);
}



const age = 23;
age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);





//______________________Coding challenge 4

const tip15 = .15;
const tip20 = .2;
const bill = 275;
const tip = bill >= 50 && bill <= 300 ?  bill * tip15 : bill * tip20;
console.log(`The bill was ${bill}$, the tip was ${tip}$, and the total value ${bill + tip}$.`)

*/