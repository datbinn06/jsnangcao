// let a =10;
// let b = 20;
// const button = document.getElementById('demo');
// const hienthi = document.getElementById('hienthi');
// const ketqua = document.getElementById('ketqua');

// button.addEventListener("click",()=>{
//     ketqua.innerHTML=a+b;
// })
// button.addEventListener("click", () => {
//     ketqua.innerHTML = a + b;
//     // lưu dữ liệu vào localStorage
//     localStorage.setItem("ketqua", ketqua.innerHTML);
// });

// // xóa dữ liệu từ localStorage
// button2.addEventListener("click", () => {
//     localStorage.removeItem("ketqua");
// });

// // lấy dữ liệu từ localStorage
// const ketQuaLocalStorage = JSON.parse(localStorage.getItem("ketqua"));
// hienthi.innerHTML = ketQuaLocalStorage;


import { sum } from "./sum.js";
import { loadTodos } from "./storge.js";
console.log(sum(10, 20));
console.log(loadTodos());
