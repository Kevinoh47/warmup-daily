'use strict';

// Turn us into ES6!!
// require('babel-register');

// arrays...
let myArr = [1,2,3,4,5,6,7,8,9,10];

let forLoop0 = (arr) => {
  for(let i=0; i < arr.length; i++) {
    console.log(myArr[i]);
  }
};

let forLoop1 = (arr) => { arr.forEach(e => console.log(e)); };

let whileLoop = arr => {
  let counter = 0;
  while(counter < arr.length) {
    console.log(arr[counter]);
    counter++;
  }
};

const doubleMe = num => num * 2;
const evenNums = num => (num % 2 === 0) ? true: false;
const oddNums = num => (evenNums(num) === false);

let map = (arr, func) => {
  let outputArr = [];
  arr.forEach(e => outputArr.push(func(e)));
  return outputArr;
};

let filter = (arr, func) => { 
  let outputArr = [];
  arr.forEach(e => {
    if (func(e)) { outputArr.push(e);}
  });
  return outputArr;
};

let addingCallback = (num, accumulator) => num + accumulator;

let reduce = (arr, callback, accumulator) => {
  if (accumulator === undefined) accumulator = 0;
  arr.forEach(e => {
    accumulator = (callback(e,accumulator));
    // console.log({accumulator});
  });
  return accumulator;
};

let doubledVals = map(myArr, doubleMe);
let evenVals = filter(myArr, evenNums);
let oddVals = filter(myArr, oddNums);
let addReduced = reduce(myArr, addingCallback, 10);
let addReduced2 = reduce(myArr, addingCallback);


console.log({doubledVals});
console.log({evenVals});
console.log({oddVals});
console.log('reducer with starting value...', reduce([0, 1, 2, 3, 4], addingCallback, 10));
console.log('reducer without starting value...', reduce([0, 1, 2, 3, 4], addingCallback));
console.log({addReduced});
console.log({addReduced2});

// whileLoop(myArr);
// forLoop1(myArr);
// forLoop0(myArr);

// Objects

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda'],
};

let state = {};

let newPeople = [];
let newStuff = {}; // changed from a const to a let
const constNewStuff = Object.assign({}, stuff);
console.log('constNewStuff 1: ' , JSON.stringify(constNewStuff));
let newState = {};

newPeople = ['Odie', ...people, 'Garfield'];
console.log({newPeople});
console.log({people});

newStuff = Object.assign({}, stuff); 
let newStuff2 = Object.assign({cars:[...stuff.cars]}, stuff);
newStuff.cars.push('Nissan');

console.log('newStuff: ', JSON.stringify(newStuff));
console.log('pushing onto newStuff.cars shows that the array was copied by reference. Here is stuff after we updated newStuff: ', JSON.stringify(stuff));
console.log('and also constNewStuff 2: ' , JSON.stringify(constNewStuff));
console.log('and newStuff2, which attempts to destructure cars array separately from the rest of the object assigment: ', JSON.stringify(newStuff2));

stuff.cars.pop();
console.log('popped stuff.cars... ', stuff.cars);
console.log('newStuff.cars: ', newStuff.cars);
console.log('constNewStuff.cars: ', constNewStuff.cars);
console.log('newStuff2.cars: ', newStuff2.cars);

newStuff.cars = [];
newStuff.cars = [...stuff.cars]; //stuff.cars.map(e => e); //this also works...
newStuff.cars.push('Tesla');

console.log('newStuff.cars was reset to an empty array, then we used stuff.map to re-populate it, which worked, and then we also tried using destructured assignment for the array separate from the object, which also worked. Finally we pushed a new car pushed on... ', newStuff.cars);
console.log('using map, or directly using destructuring assignment for the array, rather than  using the original array that came with the Object assign operation stops the copy by reference. Here is stuff: ', stuff.cars);
console.log('and also constNewStuff: ', constNewStuff.cars);
console.log('and also newStuff2: ', newStuff2.cars);

state = {people: ['Odie', ...people, 'Garfield'], stuff: stuff};
console.log('state object: ', JSON.stringify(state));

newState = {newPeople:[], newStuff:stuff};
console.log('newState object: ', JSON.stringify(newState));
newState.newPeople = ['Odie', ...people, 'Garfield'];
// newState.newStuff.cars = []; // oops this also resets stuff.cars -- passing by reference again.
newState.newStuff.cars = stuff.cars.map(e=>e); 
///newState.newStuff.cars.push('Chevy Bolt'); oops once again we are changing the other car arrays...
console.log('newState object: ', JSON.stringify(newState));
console.log({stuff});
console.log('state object: ', JSON.stringify(state));









