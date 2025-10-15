// const a = 10;
// const myName = "Dat";
// const profile = {
//     name : "Dat",
// }

// // function name
// console.log(sum(10,20));
// function sum(a,b){
//     return a + b 
// }


// // function expression
// const sum = function(a,b){
//     return a + b ;
// }   
// console.log(sum(10,20));

// // arrow function
// const sum =(a,b) => {
//     return a + b
// }
// console.log(sum(10,20))

// bai tap
//bai1
const calculateTotal =  (price,quantity)=>{
    return price * quantity;
}
console.log(calculateTotal(10,20));

//cach 2
const calculateTotall = (product) => {
   if(typeof product !== "object"){
        throw new Error("Lỗi: Product phải là 1 object");
    }
    const {price , quantity} = product ;

    if(typeof price !== "number" || typeof quantity !== "number"){
        throw new Error("Lỗi: Giá và số lượng phải là số");
    }
    return price * quantity
}

console.log(calculateTotall({price : 1000, quantity : 2}));


//bai2
const applyDiscount =  (price,discountPercent)=>{
    return price - (price * discountPercent/100);
}
console.log(applyDiscount(100,20))


const calculateShipping = (order) => {
    if (typeof order !== "object") {
        throw new Error("Lỗi: Tham số phải là 1 object");
    }

    const { totalPrice, location } = order;

    if (typeof totalPrice !== "number" || typeof location !== "string") {
        throw new Error("Lỗi: totalPrice phải là số và location phải là chuỗi");
    }

    if (totalPrice >= 500000) {
        return 0;
    } else {
        if (location === "noi-thanh") {
            return 30000;
        } else if (location === "ngoai-thanh") {
            return 50000;
        } else {
            return 10000; // 10.000 thay vì 10
        }
    }
}

// Gọi hàm với object
console.log(calculateShipping({ totalPrice: 600000, location: "noi-thanh" }));  // 0
console.log(calculateShipping({ totalPrice: 400000, location: "noi-thanh" }));  // 30000
console.log(calculateShipping({ totalPrice: 400000, location: "ngoai-thanh" })); // 50000
console.log(calculateShipping({ totalPrice: 400000, location: "abc" }));         // 10000

