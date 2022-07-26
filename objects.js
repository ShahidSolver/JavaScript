//Array
// const data = ["shahid", "software", 2022 - 1998, ["ali", "qasim", "asad"]];
// console.log(data);
// In arrays we can acces elements/varaibles in an order
//but for unorder list etc  we used  objects which can acces every element or variable with object-properies

console.log("WE are going to start Objects");
//Object Decalaration
const data = {
  firstName: "shahid",
  lastName: "boss",
  occupation: "software",
  age: 2022 - 1998,
  friends: ["ali", "qasim", "asad"],
};
//Just show same as Array
console.log(data);
//but in objects i we want to acces properties of Objects we use
console.log(data.firstName);
console.log(data.lastName);
// to output complete name
console.log(data.firstName + data.lastName);
console.log("with another way");
//here is another way of doing this by making name as an key (because name is common in both)
const nameKey = "Name";

//console.log(data.first + nameKey);
// we can't do with the above method for this we have to represent is like a array
console.log(data["first" + nameKey]);
console.log(data["last" + nameKey]);

//To enter value from user from prompt box
const input prompt(`Choose from below
 firstName : lastName : occupation : age : friends `);
