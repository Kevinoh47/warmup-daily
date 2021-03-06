'use strict';
// 12-19-2018


console.log('__________12/19__________\n\n');

let myArr1219 = [];

for (var i = 0; i < 10; i++) {
  myArr1219.push(i+1);
}
console.log({myArr1219});

console.log('__while loop function__\n\n');


const whileLoop1219 = arr => {
  let counter = 0;
  while(counter <= 10) {
    console.log(arr[counter]);
    counter++;
  }
};
whileLoop1219(myArr1219);

console.log('__map function__\n\n');

const map1219 = (arr, myFunc) => {
  let output = [];
  arr.forEach(e => {output.push(myFunc(e));})
  return output;
};

const tripleIt = num => num * 3;

let tripledArr = map1219(myArr1219, tripleIt);

console.log({tripledArr});

console.log('___filter function__\n\n');

const filter1219 = (arr, myFilter) => {
  let result = [];
  arr.forEach(e => {
    if (myFilter(e)) {
      result.push(e);
    }
  })
  return result;
}
const divisibleBy = (num, divBy) => {
  return (num % divBy === 0) ? true:false;
};
const divBy3 = (num) => {return divisibleBy(num, 3);};
const divBy4 = (num) => {return divisibleBy(num, 4);};

const myArrValsDivisibleBy3 = filter1219(myArr1219, divBy3);
const myArrValsDivisibleBy4 = filter1219(myArr1219, divBy4);

console.log({myArrValsDivisibleBy3});
console.log({myArrValsDivisibleBy4});

console.log('___reduce function__\n\n');

const reducer1219 = (arr, myFunc, accumulator = 0) => {
  arr.forEach( e => {
    accumulator = accumulator + myFunc(e, accumulator);
    console.log(e, accumulator);
  })
  return accumulator;
}
const multiplier = (num1, num2) => {return num1 * num2;};
const doubler = num => {return multiplier(num , 2);}
const testDoubler = doubler(15);
console.log({testDoubler});
const doubledAndSummedArrValsFrom0 = reducer1219(myArr1219, doubler);
console.log({doubledAndSummedArrValsFrom0});

const doubledAndSummedArrValsFrom1 = reducer1219(myArr1219, doubler, 1);
console.log({doubledAndSummedArrValsFrom1});

console.log('__________12/16__________\n\n');

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

console.log('_________________________\n\n');
console.log('_________LOOPS___________\n\n');
console.log('_______forLoop0:_________\n\n');
forLoop0(myArr);
console.log('_______forLoop1:_________\n\n');
forLoop1(myArr);
console.log('_______whileLoop:________\n\n');
whileLoop(myArr);



console.log('_________________________\n\n');
console.log('__________ARRAYS_________\n\n');
console.log('_________________________\n\n');

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
console.log('_________________________\n\n');
console.log({evenVals});
console.log('_________________________\n\n');
console.log({oddVals});
console.log('_________________________\n\n');
console.log('reducer with starting value...', reduce([0, 1, 2, 3, 4], addingCallback, 10));
console.log('_________________________\n\n');
console.log('reducer without starting value...', reduce([0, 1, 2, 3, 4], addingCallback));
console.log('_________________________\n\n');
console.log({addReduced});
console.log('_________________________\n\n');
console.log({addReduced2});



console.log('_________________________\n\n');
console.log('_________OBJECTS_________\n\n');
console.log('_________________________\n\n');

const people = ['Kookla','Fran','Ollie'];

console.log({people});
console.log('_________________________\n\n');

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda'],
};

console.log({stuff});
console.log('_________________________\n\n');

let newPeople = ['Odie', ...people, 'Garfield'];
console.log({newPeople});
console.log('_________________________\n\n');

console.log('INSTRUCTIONS: Using spread and destructuring assignment, create a new object called newStuff, which is a copy of the stuff object, with a new car added to the end of the cars array within it.\n\n');

const newStuff = {...stuff, cars: [...stuff.cars, 'Yugo']}; // changed from a const to a let
console.log({newStuff});
console.log('_________________________\n\n');

console.log('Prove that stuff is unchanged:\n\n');
console.log({stuff});
console.log('_________________________\n\n');

console.log('INSTRUCTIONS: Create a state object with keys of people and stuff that contain the people and stuff data. Do this using object destructuring assignment.\n\n');

let state = {people, stuff};

console.log({state});
console.log('\n');
console.log('state.stuff.cars: ', state.stuff.cars);
console.log('_________________________\n\n');

console.log('INSTRUCTIONS: Using spread and destructuring assignments, create a new object called newState, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (do not just spread in newPeople and newStuff).\n\n');

let newState = {...state, people: ['Odie', ...people, 'Garfield'], stuff: {...stuff, cars: [...stuff.cars, 'Tesla']}};
console.log({newState});
console.log('\n');
console.log('newState.stuff.cars: ', newState.stuff.cars);
console.log('_________________________\n\n');

console.log('INSTRUCTIONS: Prove that the original people, stuff, and state are unchanged.\n\n');
console.log({people});
console.log('_________________________\n\n');
console.log({stuff});
console.log('_________________________\n\n');
console.log({state});
console.log('\n');
console.log('state.stuff.cars: ', state.stuff.cars);
console.log('_________________________\n\n');









