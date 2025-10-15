// binh phuong (map)
const binhphuong = function(arr){
    let result = [];
    for(let i = 0 ; i<arr.length;i++){
        result[i] = arr[i] * 2;
    }
    return result;
}
console.log(binhphuong([1,2,3]));
//c2
const  binhphuong2 = (arr) =>{
    let result = [];
    let i=0;
    for(const num of arr){
        result[i]= num * 2;
        i++;
    }
    return result;
}
console.log(binhphuong([4,5,6]));

//c3
const binhphuong3 = arr =>arr.map(num=>num*2);
console.log(binhphuong3([7,8,9]));

//c4
const binhphuong4 = arr =>{
    return arr.map(num=>num * 2);
}
console.log(binhphuong4([10,11,12]));

//them sinh vien (map)
const addsinhvien = function(arr){
    let result=[];
    let i = 0;
    for(let i=0;i<arr.length;i++){
        result[i] = arr[i] + "-sinh vien";
    }
    return result;
}
console.log(addsinhvien(["An","Binh","Dat"]));

const  addsinhvien2 = (arr) =>{
    let result = [];
    let i=0;
    for(const name of arr){
        result[i]= name + "-sih vien";
        i++;
    }
    return result;
}
console.log(addsinhvien2(["An","Binh","Dat"]));

const addsinhvien3 = arr =>{
    return arr.map(name2=>name2 + "-sinhvien");
}
console.log(addsinhvien3(["An","Binh","Dat"]));

const addsinhvien4 = arr => arr.map(name3=>name3 + "-sinh vien");
console.log(addsinhvien4(["An","Binh","Dat"]));

// lay so chan (filter)
const sochan =  function(arr){
    let j=0;
    let result =[];
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 ===0){
            result[j] = arr[i];
            j++; 
        }
    }
    return result;
}
console.log(sochan([1,2,3,4]));

const sochan2 = arr =>{
    let j=0;
    let result=[];
    for(const num of arr){
        if(num % 2 ===0){
            result[j] = num;
            j++;
        }
    }
    return result;
}
console.log(sochan2([1,2,3,4,8]));

const sochan3 = arr =>{
    return arr.filter(num=>num%2===0);
}
console.log(sochan3([1,2,3,4,8]));

const sochan4 = arr =>arr.filter(num=>num % 2===0)
console.log(sochan4([1,2,3,4,8]));

const sochan5 = arr=>{
    return arr.filter(num=>num % 2===0 ? true : false );
}
console.log(sochan5([1,2,3,4,8,10]));

//ktra do dai
const dodai = function(arr){
    let result = [];
    let j=0;
    for(let i =0;i<arr.length;i++){
        if(arr[i].length > 4){
            result[j] = arr[i];
            j++;
        }
    }
    return result;
}
console.log(dodai(["apple", "banana", "kiwi", "mango"]));

const dodai2 = arr =>{
    let result=[];
    let j =0;
    for(const str of arr){
        if(arr[i].length > 4){
            result[j] = arr[i];
            j++;
        }
    }
    return result;
}
console.log(dodai(["apple", "banana", "kiwi", "mango"]));


const dodai3 = arr => arr.filter(str =>str.length > 4);
console.log(dodai3(["apple", "banana", "kiwi", "mango","datbinn"]));

const dodai4 = arr =>{
    return arr.filter(str=>str.length>4);
}
console.log(dodai4(["apple", "banana", "kiwi", "mango"]));

 // reduce
const tinhtong = function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(tinhtong([10,20,30]));

const tinhtong2 = arr=>{
    let sum =0;
    for(const num of arr){
        sum+=num;
    }
    return sum;
}
console.log(tinhtong2([10,22,30]));

const tinhtong3 = arr => arr.reduce((total,num)=>total+num);
console.log(tinhtong3([15,20,30]));

const tinhtong4 = arr =>{
    return arr.reduce((total,num)=>total+num);
}
console.log(tinhtong4([20,20,30]));

// dem so lan xuat hien
const demSoLan = arr => 
    arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});

console.log(demSoLan(["a","b","c","a","b","a"]));


//forEach
const nhan = function(arr){
    arr.forEach(num => console.log(num * 2));
}
nhan([20,20,30]);

const nhan2 = arr =>arr.forEach(num=>console.log(num*2));
nhan([10,30,40]);

const inNhan2_4 = arr => {
    return arr.forEach(num => console.log(num * 2));
}
inNhan2_4([2,4,6]);


//in ra danh sach hoc
const list = ["JS","PHP","DEV C"];
list.forEach((item,index)=>{
        console.log(`${index + 1}  ${item}`);
});

const list2 = function(arr){
    arr.forEach(function(item){
        console.log (`${item}`);
    });
}
list2 (["JS","PHP","DEV C"]);

const list3 = arr =>arr.forEach((item) => console.log(`${item}`));
list3 (["JS","PHP","DEV C"]);

const list4 = arr => {
    arr.forEach((item)=> console.log(`${item}`));
}
list4 (["JS","PHP","DEV C"]);

