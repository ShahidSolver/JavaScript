// -------LOOPS-------
console.log("we are starting LOOPS");

//calcualte ages from given array to a new array

const birthYear = [1993, 1995, 1998];
const age = [];
for (let i = 0; i < birthYear.length; i++) {
  age.push(2022 - birthYear[i]);
}
console.log(age);

//--Now using :::Continue:::
//i think continue work as skip  means if condition will true
//it will keep skipping that condition

const num = [1, 12, 10, 11, 2, 3, 2];

for (i = 0; i < num.length; i++) {
  if (num[i] === 2) continue;
  console.log(num[i]);
}

//--Now using :::Break:::
//break actually stop and exit from the loop when it finds that condition
console.log("using break");
for (i = 0; i < num.length; i++) {
  if (num[i] === 2) break;
  console.log(num[i]);
}

//while loop
console.log("we are going to start while loop");

// diff in for and while loop
console.log("For Loop");

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("while Loop");
console.log("---___---");
//now while loop
//in while loop we can write it like this
let g = 1;
while (g < 5) {
  console.log(g);
  g++;
}
//but actually we dont need to give initial value or increment in while loop thats why
// we use while loop

// keep rolling a dice until its not 6

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled : ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("no more rolling of dice");
}

//now Coding challange
console.log("---Coding Challange Begins Here");

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
// function calcTip(bills) {
//   for (let i = 0; i < bills.length - 1; i++) {
//     if (bills[i] >= 50 && bills[i] <= 300)
//       return tips.push((tips = (15 * 100) / bills[i]));
//     else return tips.push((tips = (20 * 100) / bills[i]));
//   }
// }
// let theTip = calcTip();
// console.log(tips);
console.log("==Bills in Arrays==");
console.log(bills);

//below function is just to calculate tip
function calcTip(bills) {
  if (bills >= 50 && bills <= 300) return (15 * 100) / bills;
  else return (20 * 100) / bills;
}
//below fucntion is to fill tip aray
console.log("---tips in array:------");
for (let i = 0; i < bills.length; i++) {
  tips.push(Math.round(calcTip(bills[i])));
}
console.log(tips);

// calculate total bill
console.log("===Total Bill===");
for (let i = 0; i <= tips.length - 1; i++) {
  totals.push(bills[i] + tips[i]);
}
console.log(totals);

//Bonus Challange
let arr = [];
function calcAverage(arr) {}
let sum = 0;
for (let i = 0; i < totals.length; i++) {
  sum = sum + totals[i];
}
console.log(` sum of Total Bill : ${sum}`);
