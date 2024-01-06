const {add, sub, mul, div, square, cube, myTest} = require("./calc");
const { myObject } = require("./object");

console.log(add(23,45));
console.log(sub(23,45));
console.log(mul(23,45));
console.log(div(23,45));
console.log(square(6));
console.log(cube(6));

myTest();
console.log(myObject);
myObject.display();