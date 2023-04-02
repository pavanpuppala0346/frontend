//const num = require("./pg3_module_sample.js");

// const value = require("./pg3_module_sample.js");
// console.log(value);

// const result = require("./pg3_module_sample.js");
// console.log(result);

// const sums = require("./pg3_module_sample.js");
// console.log(sums(2, 6));


// const sum = require("./pg3_module_sample.js");
// console.log(sum(2, 6));



// const StudentDetails = require("./pg3_module_sample.js");
// const studentDetails = new StudentDetails("Ram", 15);
// console.log(studentDetails);
// console.log(studentDetails.name);



// const StudentDetails = require("./pg3_module_sample.js");
// const studentDetails = new StudentDetails("Ram", 15);
// console.log(studentDetails);
// console.log(studentDetails.name);



//2. Named Exports


const { value, studentName } = require("./sample");
console.log(value);
console.log(studentName);

const { value, studentName } = require("./sample");
console.log(value);
console.log(studentName);


const { sum, sub } = require("./sample");
console.log(sum);
console.log(sub);

const { sum, sub } = require("./sample");
console.log(sum(2, 6));
console.log(sub(8, 3));




const { sum, sub } = require("./sample");
console.log(sum(2, 6));
console.log(sub(8, 3));






const { studentDetails, carDetails } = require("./pg3_module_sample.js");

const newStudentDetails = new studentDetails("Ram", 15);
console.log(newStudentDetails);
console.log(newStudentDetails.name);

const newCarDetails = new carDetails("Alto", "60kmph");
console.log(newCarDetails);
console.log(newCarDetails.name);





const { studentDetails, carDetails } = require("./pg3_module_sample.js");

const newStudentDetails = new studentDetails("Ram", 15);
console.log(newStudentDetails);
console.log(newStudentDetails.name);

const newCarDetails = new carDetails("Alto", "60kmph");
console.log(newCarDetails);
console.log(newCarDetails.name);