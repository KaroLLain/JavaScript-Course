'use strict';

// Data needed for a later exercise
const weekDays = ['mon', 'thue', 'wed', 'thu', 'fri', 'sat', 'sun'];

 const openingHours = {
    [weekDays[3]]: {
      open: 12,
      close: 22,
    },
    [weekDays[4]]: {
      open: 11,
      close: 23,
    },
    [weekDays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex],
            this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order recived!
    ${this.starterMenu[starterIndex]} and
    ${this.mainMenu[mainIndex]} will be delivered to
    ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngreedients) {
    console.log(mainIngredient);
    console.log(otherIngreedients);
  }
};
prompt

/*

//---------------------ADDED CHALLENGE---------------------------

const getCode = str => str.slice(0,3).toUpperCase();

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for( const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} form ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(50);
  console.log(output);
}


//--------------------------CODIN CHALLENGE 4-----------------------------

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for(const [i, row] of rows.entries()) {
   const [first, second] = row.toLocaleLowerCase().trim().split('_');
   const output = `${first}${second.replace(
    second[0],
    second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});


//underscore_case
//first_name
//Some_Variable
//calculate_AGE
//delayed_departure


//--------------------STRINGS----------------------------------

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

//Methods
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  // B and E are middle seat
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E')
  console.log("You got the middle seat");
  else console.log('You got lucky');
};

checkMiddleSeat('118');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in Name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase()
                          + passengerLower.slice(1);
console.log(passengerCorrect);

//Check email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

//const lowerEmail = loginEmail.toLowerCase();
//const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const pricePL = '288,97PLN';
const priceUS = pricePL.replace('PLN', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passenger come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

//booleans
const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.includes('Boeing'));
console.log(newPlane.startsWith('Air'));

if(newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//Practice exercise
const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
}

checkBaggage('I have a laptop, some Food and pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

console.log('a+vaery+nice+string'.split('+'));
console.log('Karo Knap'.split(' '));

const [firstName, lastName] = 'Karo Knap'.split(' ');

const newName = ['Mrs.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];

  for(const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smit davies');
capitalizeName('karo knap');

//Padding
const mssg = 'Go to gate 23!';
console.log(mssg.padStart(25, '+').padEnd(35, '+'));

const masCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');

}

console.log(masCreditCard(8445167876));
console.log(masCreditCard(4566666588445167876));
console.log(masCreditCard('6562874345867848964536989'));

//Repeat
const message2 = 'Bad waether... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);

/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
  ]);

//1.
const gameEventsList = new Set(gameEvents.values());
console.log(gameEventsList);

//2.
//const deletedEvent = gameEvents.delete(64);
//console.log(gameEvents.get(64));
gameEvents.delete(64);
console.log(gameEvents);

//3.
const time = 90;
console.log(`An event happened on average, every ${time / gameEvents.size} minutes.`);

//4.
for(const [key, value] of gameEvents) {
  if(key < 45) {
    console.log(`[FIRST HALF] ${key}: ${value}`);
  } else {
    console.log(`[SECOND HALF] ${key}: ${value}`);
  }

  //OR ____   const half = key <=45 ? 'FIRST' : 'SECOMD';
}



const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };

  const question = new Map([
    ['question', 'What is the best programing language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaSctipt'],
    ['correct', 3],
    [false,'Try again!'],
  ]);


  console.log(question);

  //Convert object to map
  console.log(Object.entries(openingHours));
  const hoursMap = new Map(Object.entries(openingHours));

  console.log(hoursMap);

  //Quiz app
  console.log(question.get('question'));
  for (const [key, value] of question) {
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
  }
  //const answer = Number(prompt('Your answer'));
  const answer = 3;
  console.log(answer);

  question.get(question.get('correct') === answer);

  // Convert map to array
  console.log(...question);
  //console.log(question.entries());
  console.log(question.keys());
  console.log(question.values());

  --------------------------------------------SETS--------------------------------------
  
  const ordersSet = new Set([
    'Pasta', 
    'Pizza', 
    'Pizza', 
    'Risotto', 
    'Pasta', 
    'Pizza',
  ]);


  const rest = new Map();
  rest.set('name', 'Classico Italiano');
  rest.set(1, 'Firenze, Italy');
  rest.set(2, 'Lisbon, Portugal');


  rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23);

  rest.get('name');

  const time = 21;
  rest.get(time > rest.get('open') && time < rest.get('close'));

  console.log(rest.has('categories'));
  rest.delete(2);
  rest.size;
  //rest.clear;

  const arr = [1, 2];
  rest.set([arr], 'Test');
  rest.set(document.querySelector('h1'),'Heading');

  rest.get([arr]);
  

  console.log(ordersSet);
  console.log(new Set('Karolina'));

  console.log(ordersSet.size);
  console.log(ordersSet.has('Pizza'));
  console.log(ordersSet.has('Bread'));
  ordersSet.add('Garlic bread');
  ordersSet.add('Garlic bread');
  ordersSet.delete('Risotto');
  //ordersSet.clear();
  console.log(ordersSet);

  for(const order of ordersSet) console.log(order);
  

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = {...new Set(staff)};
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Karolina').size);
/*
//////////////// Coding Challenge 2 //////////////////////

//1.
//const players = [...game.scored];

//for (const [i, name] of players.entries()) {
// console.log(`Goal ${i + 1}: ${name}`);
//};

for(const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

//2.
const oddsValues = Object.values(game.odds);
console.log(oddsValues);

const average = oddsValues.reduce((a, b) => a + b) / oddsValues.length;
console.log(average);

// let average = 0;
// for (const odd of oddsValues) average += oddsValues;
// average /= oddsValues.lenght;
// console.log(average);

//3.
for(const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
  


// property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr=`We are open on ${properties.length} days: `

for (const day of properties) {
  openStr += `${day}, `
}
console.log(openStr);

//property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for(const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//---------------------------------------

if(restaurant.openingHours.mon) 
console.log(restaurant.openingHours.mon);

//with OPTIONAL CHAINING

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'thue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//METHODS 
console.log(restaurant.order?.(0,1) ?? `Method does not exist`);
console.log(restaurant.orderRisotto?.(0,1) ?? `Method does not exist`);

//ARRAYS
const users = [
  {name:'Jonas', email:'hello@jonas.com'}
];

console.log(users[0]?.name ?? 'User array empty');



const menu = [...restaurant.starterMenu, 
              ...restaurant.mainMenu];

for (const item of menu) console.log(item);             

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//console.log([...menu.entries()]);


//////////////// Coding Challenge //////////////////////

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };

  



//1.
const [players1, players2] = game.players;
console.log(players1,players2);

//2.
const [gk, ...fieldPlayers] = players1;

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4. 
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5.
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

const printGoals = function(...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

//7.
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//OR assignment operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

//Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;


rest1.owner &&= '<ANONYMUS>';
rest2.owner &&= '<ANONYMUS>';

console.log(rest1);
console.log(rest2);

//Nullish: null and undefined (not O and ' ')

restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;
console.log(guest);

const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);


//Use ANY data type, return ANY data type, short-circuting

console.log('------------ OR ------------');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || '' || 'Hello' || 23 || null);


const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log('------------ AND ------------');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

////////////////////////////////////////////////
// tHe REST Pattern and Paameters

// 1)Destructuring

//SPREAD, beacouse on RIGHT side of = 
const arr = [1, 2, ...[3, 4]];

//REST, beacouse on LEFT side of = 
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

//Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

//Functions
const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i<numbers.length; i++) sum += numbers[i];
  console.log(sum);
}

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

////////////////////////////////////////////////
// tHe Spread Operator

const arr = [7, 8, 9];
const badNewArrr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArrr);

const goodNewArrr = [1, 2, ...arr];
console.log(goodNewArrr);

console.log(...goodNewArrr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainManuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, string, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

//Real world example
const ingredients = [
//prompt('Let\'s make pasta! Ingredient 1?' ),
//prompt('Ingredient 2?' ),
//prompt('Ingredient 3?' )
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {fuoundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//////////////////////Destructuring objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});


const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, 
        categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//Mutating variables
let d = 111;
let e = 999;
const obj = {d: 23, e: 7, f: 14};
({d, e} = obj);
console.log(d, e);

//nested object
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const[x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary]  = [secondary, main];
console.log(main, secondary);

//Recive 2 return vlues from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//M=Nestetd Destructurig
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);


//Deaful values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/