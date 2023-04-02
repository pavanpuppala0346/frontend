//module.exports = let value = 5;

// let value = 5;
// module.exports = value;

// module.exports = 5 * 3;


// module.exports = function (num1, num2) {
//     return num1 + num2;
// };

// function sum(num1, num2) {
// return num1 + num2;
// }
// module.exports = sum;

// module.exports = class StudentDetails {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
// };

// class StudentDetails {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
// module.exports = StudentDetails;

//2. Named Exports

exports.value = let value = 5;
exports.studentName = let studentName = "Rahul";


let value = 5;
exports.value = value;
let studentName = "Rahul";
exports.studentName = studentName;

let value = 2;
exports.sum = 2 + 3;
exports.sub = 3 - value;

exports.sum = function (num1, num2) {
    return num1 + num2;
  };
exports.sub = function sub(num1, num2) {
    return num1 - num2;
};

function sum(num1, num2) {
    return num1 + num2;
  }
exports.sum = sum;
function sub(num1, num2) {
return num1 - num2;
}
exports.sub = sub;

exports.studentDetails = class StudentDetails {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  };
exports.carDetails = class CarDetails {
constructor(name, age) {
    this.name = name;
    this.speed = age;
}
};


class StudentDetails {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
exports.studentDetails = StudentDetails;
  
class CarDetails {
constructor(name, age) {
    this.name = name;
    this.speed = age;
}
}
exports.carDetails = CarDetails;