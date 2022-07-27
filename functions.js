"use strict";

//Functions
function iceFood(apple, orange) {
  console.log("its a function");
  console.log(
    `Your Price of the apple is ${apple} your price of orange is  ${orange}`
  );
}
iceFood(5, 4);

function juice(banana, peach) {
  const shake = `Total number of  banana's are   ${banana} and peach are ${peach} `;
  return shake;
}
const done = juice(5, 5);
console.log(done);

// Function declaration vs Expression
console.log("its function declaration ");
function calculateAge(birthYear) {
  const age = 2022 - birthYear;
  return age;
}
const yourAge = calculateAge(1998);
console.log(yourAge);

// More Complex
console.log("more complex function");
function calcAge(birth) {
  return 2022 - birth;
}
const totalAge = calcAge(1998);
console.log(totalAge);

// function Expression
const checkk = function (c) {
  return 20 + c;
};
const kk = checkk(3);
console.log(kk);

// Arrow function
console.log("Now Arrow Function");
const birthe = 0;
const agge = (a, b) => {
  return a - b;
};
const cac = agge(2022, 1996);
console.log(cac);

//again arrow function

const itsFunction = () => {
  return console.log("function");
};
const now = itsFunction();
console.log(now);

// // FIRST CHALLANGE OF FUNCTIONS
// console.log("First Challange ");
//  averageBothTeam(){
//  const abt = ((dolphins + koalas )/2);
// return abt;
// }:

// const calcAverage = (oneR,twoR,threeR) => {
//   return ((oneR + twoR + threeR) / 3 );
// };
// const avgDolphin =calcAverage(44,23,71)
// const avgKoalas =calcAverage(65,54,49)
// const checkWinner (avgDolphin,avgKoalas){
//   console.log(`Average of Dolphin Team is  ${avgDolphin} vs Average of Koalas is ${avgKoalas} `);
// }

const calcAverage = (oneR, twoR, threeR) => {
  return (oneR + twoR + threeR) / 3;
};
// function averageBothTeam() {
//   const avgDolphins = calcAverage(2, 2, 2);
//   const avgKoalas = calcAverage(1, 1, 1);
//   return avgDolphins, avgKoalas;
// }
function avgDolphins() {
  return calcAverage(2, 2, 2);
}
function avgKoalas() {
  return calcAverage(1, 1, 1);
}

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas) {
    return console.log(`Dolphins wins( ${avgDolphins} vs ${avgKoalas}) `);
  } else if (avgKoalas >= avgDolphins) {
    return console.log(`Koalas Wins (${avgKoalas} vs ${avgDolphins})`);
  } else {
    return console.log(" No team Wins");
  }
}
const fina = checkWinner();
console.log(fina);
