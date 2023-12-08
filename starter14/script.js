'use strict';

/*
const Person = function(firstName, birthYear) {
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never do this
    //this.calcAge = function() {
    //    console.log(2037 - this.birthYear);
    //}
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1.New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automaticcaly return {}  

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

//Prototypes

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};

jonas.calcAge();


///////// ---------------- Coding challange no 1 -------------

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    console.log(this.speed += 10);
};

Car.prototype.brake = function() {
    console.log(this.speed -= 5);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1,car2);
console.log(car1.accelerate(), car2.accelerate());
console.log(car1.brake(), car2.brake());

//---------------------------------------------------------------------------------------------------------------------------------------------

class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    };
};

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

//PersonCl.prototype.greet = function() {
//    console.log(`Hey ${this.firstName}`);
//};

jessica.greet();

//1. Classes are not hoisted
//2. Classes are fist-class citzes
//3. Body of the class is executed in strict mode

//------------------------------------------------------------- GETTERS  AND  SETTERS----------------------------------------------------------
const account = {
    owner: 'Jonas',
    movements: [200, 20, 50, 120],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        return this.movements.push(mov);
    },
};


const PersonProto = {
    calcAge () {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();




//--------------------- coding challange no2 -----------------------------



class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        console.log(this.speed += 10);
    }

    brake() {
        console.log(this.speed -= 5);
    }

    get speedUs() {
        return this.speed / 1.6;
    }

    set speedUs(speed) {
        this.speed = speed * 1.6;
    }
}

const car1 = new CarCl('BMW', 120);

console.log(car1.speedUs);
car1.accelerate();
car1.accelerate();
car1.brake();
car1.speedUs = 50;
console.log(car1);



const Person= function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

Student.prototype.constructor = Student;



//--------------------- coding challange no3 -----------------------------

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    console.log(this.speed += 10);
};

Car.prototype.brake = function() {
    console.log(this.speed -= 5);
};

const EV = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
};


EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} with a charge of ${this.charge}%`);
};

EV.prototype.constructor = EV;

const tesla = new EV('Tesla', 120, 28);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
console.log(tesla);





//--------------------------------------------------------------------------------------------------------


class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`);
    }

    get fullName() {
        return this._fullName;
    }

    static hey() {
        console.log('Hey there');
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}.`);
    }

    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} yo, but as a student I feelmore like ${2037 -  this.birthYear + 10}`);
    }
};

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

martha.introduce();
martha.calcAge();

//--------------------------------------------------------------------------------------------------------

const PersonProto = {
    calcAge () {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

//------------------------------------------------------------------------------------------------------------------------

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

//Public interface 
class Account {
    // 1) Public fields (instances)
    locale = navigator.language;
    
    // 2) Private fields (instances)
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        //protected poperty
        this.#pin = pin;
        //this._movements = [];
        //this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // 3) Public methods

    //Public interface
    getMovements() {
        return this.#movements;
        return this;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        //if(this.#approveLoan(val)) {
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }

    // 4) Private methods
   // #approveLoan(val) {
    _approveLoan(val) {
        return true;
    }

}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

//acc1.movements.push(250);
//acc1.movements.push(-50);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

acc1.deposit(300).deposit(300).withdraw(35).requestLoan(500).withdraw(200);
console.log(acc1.getMovements());


*/

//--------------------------------------- Coding challenge 4

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed; 
    }

    accelerate() {
        this.speed += 10
        console.log(`${this.make} is going at ${this.speed} km/h.`);
        return this;
    }

    brake() {
        this.speed -= 5
        console.log(`${this.make} is going at ${this.speed} km/h.`);
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6
    }
};

class EVCl extends CarCl {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        console.log(`Battery is charged to ${this.charge}%`);
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} with a charge of ${this.charge}%`);
        return this;
    };
}

const ford = new EVCl('Ford', 100, 10);
console.log(ford);

ford.accelerate().accelerate().chargeBattery(100).accelerate();