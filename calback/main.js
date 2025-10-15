// callback cơ bản
function sayHello(name) {
  return "Xin chào " + name;
}

function processUser(callback) {
  let name = "Đạt";
  return callback(name); // gọi callback
}

console.log(processUser(sayHello)); // Xin chào Đạt

//
function hello(name, callback) {
    console.log("Xin chào " + name);
    callback(); // gọi hàm được truyền vào
}

function afterHello() {
    console.log("Tôi là callback nè!");
}

hello("Đạt", afterHello);


//tính toán callback
function add(a, b) {
     return a + b; 
}
function multiply(a, b) {
     return a * b;
    
}

function calculate(a, b, operation) {
  return operation(a, b); // gọi callback
}

console.log(calculate(5, 10, add));      // 15
console.log(calculate(5, 10, multiply)); // 50


//callbacl với mảng 
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
  console.log(num * 2);
});


//callback bat dong bo
console.log("Bắt đầu");

setTimeout(function() {
  console.log("Đang chạy sau 2 giây...");
}, 2000);

console.log("Kết thúc");

// switch
function calculate(a, b, method) {
    switch(method) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return b !== 0 ? a / b : "Không thể chia cho 0";
        default:
            return "Phép toán không hợp lệ";
    }
}

console.log(calculate(10, 5, "add"));      // 15
console.log(calculate(10, 5, "subtract")); // 5
console.log(calculate(10, 5, "multiply")); // 50
console.log(calculate(10, 5, "divide"));   // 2


// callback k vô danh
function getData(callback) {
    console.log("Đang lấy dữ liệu...");
    setTimeout(() => {
        const data = { id: 1, name: "Sản phẩm A" };
        callback(data);
    }, 2000);
}
function showData(result) {
    console.log("Dữ liệu nhận được:", result);
}

// Gọi hàm, và truyền callback có tên vào
getData(showData);


// vô danh 
function getData(callback) {
    console.log("Đang lấy dữ liệu...");
    setTimeout(() => {
        const data = { id: 1, name: "Sản phẩm A" };
        callback(data);
    }, 2000);
}

getData(function(result) {
    console.log("Dữ liệu nhận được:", result);
});

function getData(callback) {
    console.log("Đang lấy dữ liệu...");
    setTimeout(() => {
        const data = { id: 1, name: "Sản phẩm A" };
        callback(data);
    }, 2000);
}

getData((result) =>{
    console.log("Dữ liệu nhận được:", result);
});

