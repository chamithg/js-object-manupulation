const sculptureList = require("./data.js"); // import data.js

//const element = sculptureList[1]; // <---- comment out this line in your solution!

const sculptureListLengths = [];

for (let i = 0; i < sculptureList.length; i++) {
  const tempElement = sculptureList[i];
  const tempObject = {};
  for (const key in tempElement) {
    tempObject[key] = tempElement[key].length;
  }
  sculptureListLengths.push(tempObject);
}
console.log(sculptureListLengths);
// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
// for (const key in element) {
//   console.log(`${key}: ${element[key].length}`);
// }
