'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value"${mov}€</div>
      </div>
  `;

  containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements
      .filter(mov => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
      labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
      .filter(mov => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
      labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
      .filter(mov => mov > 0)
      .map(deposit => deposit * acc.interestRate / 100)
      .filter((int, i, arr) => int >= 1)
      .reduce((acc, int) => acc + int, 0);
      labelSumInterest.textContent = `${interest}€`;
};

//computing user name
const createUsernames = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  });
}; 
createUsernames(accounts);

const updateUI = function(acc) {
  //Display ovements
  displayMovements(currentAccount.movements);
  //Display balance
  calcDisplayBalance(currentAccount);
  //Display summary
  calcDisplaySummary(currentAccount);
};

//Event handlesr
let currentAccount;

btnLogin.addEventListener('click', function(e) {
  //Prevent form from submiting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  };
});


btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  if(amount > 0 && 
    recieverAcc &&
    currentAccount.balance >= amount && recieverAcc?.username 
    !== currentAccount.username) {
      currentAccount.movements.push(-amount);
      recieverAcc.movements.push(amount);

      //updateUI
      updateUI(currentAccount);
    };
});

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  };
  //Clear input fields
  inputLoginUsername.value = inputLoginPin.value = '';
});

btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  if(
      currentAccount.username === inputCloseUsername.value &&
      currentAccount.pin === Number(inputClosePin.value)) {
        const index = accounts.findIndex(acc => acc.username === 
          currentAccount.username);
        //Delete account
        accounts.splice(index, 1);
        //Hide UI
        containerApp.style.opacity = 0;
      };
    inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//const currencies = new Map([
  //['USD', 'United States dollar'],
  //['EUR', 'Euro'],
  //['GBP', 'Pound sterling'],
//]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*

//--------------------------- ARRAY METHODS ----------------------------

let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//SPLICE
//console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);


//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(' - '));


// ------------------------------ 2 ------------------------------

// AT
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length -1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jona'.at(0));
console.log('jona'.at(-1 ));



//--------------------------------FOR EACH LOOP----------------------------

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements ) {
for (const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i + 1} :You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} :You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----- FOR EACH ------');
movements.forEach(function(movement, index, array) {
  if(movement > 0) {
    console.log(`Movement ${index + 1} :You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1} :You withdrew ${Math.abs(movement)}`);
  } 
})


//MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});

//SET key is same as value
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function(value, _, map) {
  console.log(`${value}: ${value}`);
})

//--------------------CODING CHALLENGE 1 ------------------------------

//adult || puppy
//const yar = dog > 3 ? 'old' : 'puppy';

//function

const checkDogs = function(juliasData, katesData) {
  const dataJulia = juliasData.slice(1, -2);
  const allData = dataJulia.concat(katesData);

  allData.forEach(function(age, n) {
    const type = age >= 3 ? `an adult, and is ${age} years old` : 'still a puppy 🐶';
    console.log(`Dog number ${n + 1} is ${type}`);
  });

  console.log(dataJulia, allData);
};

checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);



//------------------------- MAP  FILTER  REDUCE -------------------------

const eurToUSD = 1.1;

const movementsUD = movements.map(function(mov) {
  return mov * eurToUSD;
});

const movementsUDArrow = movements.map(mov => mov * eurToUSD);

console.log(movements, movementsUD);

//      +++++++++   OR ++++++++

const movementsUSDFor = [];
for(const mov of movements) {
  movementsUSDFor.push(mov * eurToUSD);
};

console.log(movementsUSDFor);

const movementsDercriptions = movements.map((mov, i) => 
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDercriptions);

//--------------------------FILTER--------------------------

const deposits = movements.filter(mov =>  mov > 0);
console.log(deposits);

const depositsFor = [];
for ( const mov of movements ) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);



//--------------------------REDUCE--------------------------

console.log(movements);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

//Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);


//--------------------CODING CHALLENGE 2 ------------------------------

const calcAverageHumanAge = function(ages) {
  const agesInHuman = ages.map(dogAge =>  dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4);
  console.log(agesInHuman);
  const dogsOver18 = agesInHuman.filter(age => age >= 18);
  console.log(dogsOver18);
  const avrgHumanAge = dogsOver18.reduce((acc, cur) => acc + cur, 0) / dogsOver18.length;
  //const avrgHumanAge = dogsOver18.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  console.log(avrgHumanAge);
  return avrgHumanAge;
};

const avrg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avrg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


//--------------CHAINING FILTER/REDUCE/MAP METHODS --------------------------

const euroToUsd = 1.1;

//PIPeLINE
const totalDepositInUsd = movements
.filter(mov => mov > 0)
.map(mov => mov * euroToUsd)
.reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositInUsd);

//--------------------CODING CHALLENGE 3 ------------------------------\

const calcAverageHumanAge = ages => ages
      .map(age =>  age <= 2 ? 2 * age : 16 + age * 4)
      .filter(age => age >= 18)
      .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  //const avrgHumanAge = dogsOver18.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);


const avrg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avrg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avrg1,avrg2);



// -------------------------- F I N D --------------------------------

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


// -------------------------- SOME && EVERY ---------------------------

console.log(movements);

//EQUALITY
console.log(movements.includes(-130));

//CONDITION
console.log(movements.some(mov => mov === -130));

const enyDep = movements.some(mov => mov > 5000);
console.log(enyDep);

//EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(mov => mov > 0));
console.log(movements.every(mov => mov > 0));
console.log(movements.filter(mov => mov > 0));


// ---------------   FLAT   &&   FLAT--MAP   ---------------------------

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));


//flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);


// ---------------   SORTING ARRAYS   ---------------------------

//Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

//Numbers
console.log(movements);

//return < 0, A, B
//return > 0, B, A

//Ascending
movements.sort((a, b) => a - b);
console.log(movements);

//Descending
movements.sort((a, b) => b - a);
console.log(movements);


// -------------  CREATIG && FILLING ARRAYS  AUTOMATICLY --------------


//Empty arrays + fill method
const arr = [1, 2, 3, 4, 5,  6, 7]
const x = new Array(7);
console.log(x);

//x.fill(1);
x.fill(1, 3, 5)
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

//Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (cur, i) => i + 1);
console.log(z);

const random = Array.from({length: 1000}, (_, i) => Math.trunc(Math.random() * i));
console.log(random);


labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent)
  );
  
    console.log(movementsUI);
});


// -------------  ARRAY EXERCISES --------------
//1
const bankDepositSum = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov > 0)
.reduce((acc, cur) => acc + cur, 0);

console.log(bankDepositSum);

//2
const numDeposits1000 = accounts
.flatMap(acc => acc.movements)
//.filter(mov => mov > 1000).length;
.reduce((count, cur) => cur >= 1000 ? count + 1 : count, 0)

console.log(numDeposits1000);

//3
const {deposits, withdrawals} = accounts
.flatMap(acc => acc.movements)
.reduce((acc, cur) => {
  //cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
  acc[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
  return acc;
}, {deposits: 0, withdrawals: 0});

console.log(deposits, withdrawals);

//4
const convertTitleCase = function(title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title.toLowerCase().split(' ')
    .map(word => exceptions.includes(word) ? word : capitalize(word))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

*/

// ----------------------- Coding Challenge #4 ------------------------

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  ];


//1
dogs.forEach(function(dog, index, array) {
  let recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  dog.reccomended = recommendedFood;
  let isGood = dog.curFood > (dog.reccomended * 0.90) && dog.curFood < (dog.reccomended * 1.10);
  //2
  const sarahsDog = dogs.filter(dog => dog.owners.includes('Sarah')) > isGood ? `Sarah's dog eating too much` : `Sarah's dog eating too little`;

  console.log(sarahsDog);

});
console.log(dogs);

//3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.reccomended).map(dog => dog.owners).flatMap(own => own) ;
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.reccomended).map(dog => dog.owners).flatMap(own => own) ;
console.log(ownersEatTooLittle);

//4
console.log(`${ownersEatTooMuch.join(` and `)}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(` and `)}'s dogs eat too little!`);

//5
console.log(dogs.some(dog => dog.curFood === dog.reccomended));

//6
console.log(dogs.some(dog => dog.curFood > dog.reccomended * 0.9 && dog.curFood < dog.reccomended * 1.1));

//7
console.log(dogs.filter(dog => dog.curFood > dog.reccomended * 0.9 && dog.curFood < dog.reccomended * 1.1));

//8
const dogsSorted = dogs.slice().sort((a, b) => a.reccomended - b.reccomended);
console.log(dogsSorted);


//console.log(movements.every(mov => mov > 0));
//console.log(account4.movements.every(mov => mov > 0));