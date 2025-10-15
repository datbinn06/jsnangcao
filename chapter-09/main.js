function tinhtoan(a,b,method){
    switch(method){
        case "cong":
            return a + b;
        case "tru":
            return a - b;
    }
}

const calculate = (a,b,method,callback)=>{
   return callback(a,b,method);
}

console.log(calculate(5,10,"cong",tinhtoan)); // 15
console.log(calculate(5,10,"tru",tinhtoan));  // -5
