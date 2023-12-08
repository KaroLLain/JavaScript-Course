// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
//const x = 23;

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1)Understanding the problem
// What is temp amplitude? Ans: difference between lowest and highest temp
//How to compute the max and the min temperatures?
//Whatt's a sensor error? And what to do?

//2) Breaking up into sub-problems
//How to ignore errors?
//Find max value in temp array?
//Find min value in temp array?
//Substact min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//Problem 2
//Func should now recive 2 arrays of temp

//Understanding the problem
//merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 2, 5, 1], [9, 0, 2, 6]);
console.log(amplitudeNew);




const measureKelvin = function() {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //value: Number(prompt('Degrees celsius:'))
    value: 10
  }

  //console.log(measurement);
  console.table(measurement);
  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);
  
  const kelvin = measurement.value + 273;
  return kelvin;
}

console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 2, 5, 1], [9, 4, 2, 6]);
console.log(amplitudeBug);




// 1)Understanding the problem
// how to compute upcoming temperatures from any array?
// how to build a string with temperatures?

//2) Breaking up into sub-problems
//Display every value from an array
//Put it into a string

const printForecast = function(arr) {

 // const temps = t1.concat(t2);
  let days = 1;

  for( let i = 0; i < arr.length; i++) {
    //if(typeof temp !== 'number') continue;
    console.log(`...${arr[i]} C in ${days++} days...`);
  }

  
}

//const forecastedTemp = printForecast([17, 21, 23]);
const forecastedTemp = printForecast([12, 5, -5, 0, 4]);
console.log(forecastedTemp);

*/

const data1 =  [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
   let str = '';
   for( let i = 0; i < arr.length; i++) {
     str += ` ${arr[i]}°C in ${i + 1} days ...`;
   }
   console.log(`...` + str);
}

console.log(printForecast(data1));


const strong = function(x) {
  let num = 1;
  for( let i = 0; i < x; i++) {
    num = num + num * i;
  }
  return num;
}

console.log(strong(5));