'use strict';


let myArr = [1,2,3,4,5,6,7,8,9,10];

// from https://github.com/codefellows-seattle-javascript-401n7/class/blob/master/reference/WHITEBOARD-PRACTICE.md 
// FUNCTIONAL PROGRAMMING 5. create a function called find that takes an array and a callback and uses reduce to return the first item in the array that the callback returns true

// curried callbacks
function divisibleBy(divisor) {
  return function(num) {
    return (num % divisor === 0);
  }
}
let divisibleBy7 = divisibleBy(7);
let divisibleBy5 = divisibleBy(5);
let divisibleBy13 = divisibleBy(13);

let find = (arr, cb) => {
  let output = [];
  arr.reduce( (reducer, curr) => {
    if (cb(curr)) { 
      reducer = curr;
      output.push(reducer);
    }
  }, 0);
  return (output.length) ? output[0] : false;
}
console.log({'14 is divisble by 7?': divisibleBy7(14)});
console.log({'15 is divisble by 7?': divisibleBy7(15)});

console.log('\n --- \n');
console.log({'first value divisible by 7 using the find function?': find(myArr, divisibleBy7)});
console.log({'first value divisible by 5 using the find function?': find(myArr, divisibleBy5)});
console.log({'any values divisible by 13 using the find function?': find(myArr, divisibleBy13)});
console.log('\n --- \n');
/**
 * ARRAYS
 *  Create an array of numbers, 1 through 10
 *  Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.
 *  Write a function, called whileLoop that takes an array as a parameter, runs the array through a while(...) loop and does a console.log() of each element.
 *  Implement .map(), .filter(), .reduce() as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.
 */

function AddReducer (arr) {
  let total = 0;
  let _adder = ( num ) => {total += num };
  
  for (var e of arr) {
    _adder(e);
  }

  return total;
}

console.log({'AddReducer Array':myArr, 'summed values': AddReducer(myArr)});
console.log('\n --- \n');
console.log({'arrays own reducer':myArr.reduce((prev, curr)=> prev + curr, 0)});
console.log('\n --- \n');


let evens = num => {return ( num % 2 === 0) }
let odds = num => { return !evens(num); };

console.log({'is 8 even?': evens(8), 'is 8 odd?': odds(8)});
console.log('\n --- \n');

function filterArr(arr, cb) {
  let output = [];
  for (var value of arr) {
    if (cb(value)) { 
      output.push(value);
    };
  }
  return output;
}

console.log({'filtered evens':filterArr(myArr, evens), 'filtered odds':filterArr(myArr,odds)});
console.log('\n --- \n');


// curried input functions for callback
let multiplier = (multiplier) => {
   return function(num) {
     return num * multiplier;
    };
};
let doubler = multiplier(2);
let tripler = multiplier(3);
let qaudrupler = multiplier(4);

console.log({'double 5': doubler(5), 'triple 5':tripler(5), '5x4':qaudrupler(5)});
console.log('\n --- \n');

// implement map as a function
let mapArr = (arr, cb) => {

  let output = [];
  for (var value of arr) {
    output.push(cb(value));
  }
  return output;
}

console.log({'map doubler':mapArr(myArr, doubler)});
console.log('\n --- \n');
console.log({'map tripler': mapArr(myArr, tripler)});
console.log('\n --- \n');
console.log({'map qaudrupler': mapArr(myArr, qaudrupler)});
console.log('\n --- \n');


function whileLoop (arr) {
  let counter = 0;
  while (counter < arr.length) {
    console.log(arr[counter]);
    counter++;
  }
}

console.log('\n While Loop \n');
whileLoop(myArr);

console.log('\n --- \n');

let forLoop = arr => {

  // for - in - this is bad cuz it is not limited to extra properties that may have been added
  console.log('\n  for in \n');
  for (var i in arr) { console.log(arr[i]); }
  console.log('\n --- \n');
   
  // for - of 
  console.log('\n for of \n');
  for(var e of arr) { console.log(e);}
  console.log('\n --- \n');

  // arr.forEach()
  console.log('\n arr.forEach \n');
  arr.forEach(e => {console.log(e)});
  console.log('\n --- \n');

  // Object.values
  console.log('\n Object.values \n');
  console.log(Object.values(arr));
  console.log('\n --- \n');

  // Object.keys
  console.log('\n Object.keys \n');
  console.log(Object.keys(arr));
  console.log('\n --- \n');

  // Object.entries
  console.log('\n Object.entries \n');
  console.log(Object.entries(arr));

}
console.log('calling forLoop, which loops using for - in, for - of, Object.values, Object.keys, Object.entries')
forLoop(myArr);
console.log('\n --- \n');


/**
 * OBJECTS
 *  Using spread and destructuring assignment, create a new array called newPeople', which is a copy of the people` array, with a person named 'Odie' added to the beginning and one named 'Garfield' added to the end.
 * 
 *  Using spread and destructuring assignment, create a new object called newStuff', which is a copy of the stuffobject, with a new car added to the end of thecars` array within it
 * 
 * Create a state object with keys of people and stuff that contain the people and stuff data. Do this using object destructuring assignment
 * 
 * Using spread and destructuring assignments, create a new object called newState, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don't just spread in newPeople and newStuff)
 * 
 * Prove that the original people, stuff, and state are unchanged.
 */

const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = ['Odie', ...people, 'Garfield'];


console.log({newPeople});
console.log('\n --- \n');
console.log({people});
console.log('\n --- \n');

let newStuff = {  ...stuff, toothbrush: 'bamboo', cars: [...stuff.cars, 'Mazarati']};

console.log({newStuff});
console.log('\n --- \n');
console.log({stuff});
console.log('\n --- \n');

state = {people: people, stuff: stuff};

let newState = {people: ['Odie', ...people, 'Garfield'], stuff: { ...stuff, toothbrush: 'bamboo', cars: [...stuff.cars, 'McClaren']}};

console.log({newState});
console.log('\n --- \n');
console.log({'newState stuff': newState.stuff});
console.log('\n --- \n');
console.log({state});
console.log('\n --- \n');
console.log({'state stuff': state.stuff});








