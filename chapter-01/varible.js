// var, let, const

// var a = 10;
// var a = 20;
// console.log(a);

// let b = 10;
// let b = 20;
// console.log(b);

// const c = 10;
// console.log(c);

// const myName = "Đạt";
// const myAge = 36;
// const myStatus = true;

// const info = {
//     name: "Đạt",
//     age: 36,
//     status: true,
// };
// const myFriends = ["Huy", "Hải", "Huyền", "Hằng"];

// console.log(info);

// Hàm

// function name
console.log(sum(10, 20));
function sum(a, b) {
    return a + b;
}

// function expression
console.log(sum2(10, 20));
const sum2 = function (a, b) {
    return a + b;
};

class conVat {
  constructor() {
    this.name = "Dat";
  }

  run() {
    console.log("Dang chay");
  }
}

const vat = new conVat();
console.log(vat.name);  // Dat
vat.run();              // Dang chay
