const dateOfBirth = ["1998", "1999", "2000"];
const currentYear = 2022;
const age = [
  currentYear - dateOfBirth[0],
  currentYear - dateOfBirth[1],
  currentYear - dateOfBirth[2],
];
console.log(age);

//Challange # 2
console.log("Chalange 2");

const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    const tip = (billValue * 15) / 100;
    return tip;
    // return console.log(`Your Tip against the bill ${billValue} is = ${tip}`);
  } else {
    const tip = (billValue * 20) / 100;
    return tip;
    // return console.log(`Your Tip against the bill ${billValue} is = ${tip}`);
  }
};
//includes tip only on the given bills
console.log("Here are the Tips in an Array");
const bills = [125, 555, 44];

const tipA = calcTip(bills[0]);
const tipB = calcTip(bills[1]);
const tipC = calcTip(bills[2]);
const tipT = [tipA, tipB, tipC];
console.log(tipT);
//includes bill + tip
console.log("Here are the ttoal sum in an array ");
const tota1 = tipA + bills[0];
const tota2 = tipA + bills[1];
const tota3 = tipA + bills[2];
const totalBill = [tota1, tota2, tota3];
console.log(totalBill);
