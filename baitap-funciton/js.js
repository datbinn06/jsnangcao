//bai1 tinh toong
const sum = function(a,b){
    return a + b;
}
console.log(sum(10,20));

//arrow funcition
const sum2 = (a,b) =>{
    return a + b;
}
console.log(sum2(10,20));


//bai2 tinh chan le
const chanle = function(x){
    if(x % 2==0){
        console.log(`${x} la so chan`);
    }else{
        console.log(`${x} la so le`);
    }
    return x;
}
chanle(10);

//arrow funcition
const chanle2 = x =>{
    if(x % 2==0){
        console.log(`${x} la so chan`);
    }else{
        console.log(`${x} la so le`);
    }
    return x;
}
chanle2(11);

const chanle3 = function(x){
    return x % 2===0 ? `${x} la so chan`  : `${x} la so le`;
}
console.log(chanle3(10));
console.log(chanle3(11));


// bai 3 tinh do dai cua chuoi
const Strlen = function(str){
    return str.length;
}
console.log(Strlen('hello'));

//arrow funcition
const Strlen2 = (str)=>{
    return str.length;
}
console.log(Strlen2('hello'));

