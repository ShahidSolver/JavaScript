//Array
// const data = ["shahid", "software", 2022 - 1998, ["ali", "qasim", "asad"]];
// console.log(data);
// In arrays we can acces elements/varaibles in an order
// but for unorder list etc  we used  objects which can acces every element
// or variable with object-properies

console.log("WE are going to start Objects");
//Object Decalaration
const data = {
  firstName: "Shahid",
  lastName: "boss",
  occupation: "software",
  birth: 1998,
  friends: ["ali", "qasim", "asad"],
  ageCalc: function () {
    this.aged = 2022 - this.birth;
    return this.aged;
  },
  hasDriverLicense: false,
  driver: function () {
    if (this.hasDriverLicense == true) {
      return "has a Drivers License";
    } else {
      return "Doesn't has a Drivers Licence";
    }
  },
};
//Just show same as Array
console.log(data);
//but in objects we want to acces properties of Objects we use
console.log(data.firstName);
console.log(data.lastName);
// to output complete name
console.log(data.firstName + data.lastName);
console.log("with another way");
//here is another way of doing this by making name as an key (because name is common in both)
const nameKey = "Name";

//console.log(data.first + nameKey);
// we can't do with the above method for this we have to represent is like an array
console.log(data["first" + nameKey]);
console.log(data["last" + nameKey]);

//To enter value from user from prompt box
console.log("/////Prompt Box//////");
const input = prompt(`Choose from below
 firstName : lastName : occupation : age : friends `);
if (data[input]) {
  console.log(data[input]);
} else {
  prompt(`inValid Input choose from given below
  firstName : lastName : occupation : age : friends `);
}

//Chalange
console.log("///Challange///");
console.log(
  `${data.firstName} has ${data.friends.length} friends but ${data.friends[0]} is his best friend`
);

console.log(data.ageCalc(1998));
console.log(data["ageCalc"](1998));
console.log("After Changing it to this");
console.log(data.ageCalc());

function getSummary() {
  console.log(`Summary of this person:
   ${data.firstName} is : `);
  return console.log(
    `${
      data.firstName
    } is a ${data.ageCalc()} years old teacher ${data.driver()}`
  );
}
console.log(getSummary());

//Coding Challange Begins Here

console.log("The New Challange");

// Bmi = mass / height *height

const markObj = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    const Bmi = this.mass / (this.height * this.height);
    return Bmi;
  },
};
const johnObj = {
  fullName: "john Smith",
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    const Bmi = this.mass / (this.height * this.height);
    // we can also write the above line with these 2 bellow ways
    // johnOBj.Bmi = this.mass / (this.height * this.height);
    // this.Bmi = this.mass / (this.height * this.height);
    return Bmi;
  },
};
console.log(
  `${johnObj.fullName} BMI (${johnObj.calcBmi()})'s is higher than ${
    markObj.fullName
  }'s BMI (${markObj.calcBmi()}) !! )`
);
