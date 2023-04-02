// export default let value = 5;


// let a = 5;
// export default a;

// export default 5 * 3;

// export default function (num1, num2) {
//     return num1 + num2;
// }

// function add(num1, num2) {
// return num1 + num2;
// }
// export default add;

// export default class StudentDetails {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }

// class StudentDetails {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
// export default StudentDetails;



export let value = 5;
export let studentName = "Rahul";



let value = 5;
const studentName = "Rahul";
export { value, studentName };


export function sum(num1, num2) {
  return num1 + num2;
}
export function sub(num1, num2) {
  return num1 - num2;
}

function sum(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
export { sum, sub };


export class StudentDetails {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
export class CarDetails {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
}

class StudentDetails {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class CarDetails {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
}
export { StudentDetails, CarDetails };