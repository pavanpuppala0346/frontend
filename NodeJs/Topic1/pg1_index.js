// Default imports //
// const add = require("./pg1_cal");
// console.log(add(6, 3));

//  named module importing//
const { add, sub } = require("./pg1_cal");
console.log(add(6, 3));
console.log(sub(6, 3));

