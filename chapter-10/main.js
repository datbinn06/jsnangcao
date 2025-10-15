// function cauHon() {
//     return new Promise((resolve, reject) => {
//         const isStatus = false;
//         setTimeout(() => {
//             if (!isStatus) return reject("Không đồng ý");
//             return resolve("Gật đầu đồng ý");
//         }, 3000);
//     });
// }

// cauHon()
//     .then((result) => {
//         return result + "nois cụ thể luôn";
//     })
//     .then((result) => {
//         console.log(result + "Về nhà");
//     })
//     .catch((error) => console.log(error));

// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement("script");
//         script.src = src;
//         script.onload = () => resolve(script);
//         script.onerror = () => reject("Lỗi tải script");
//         document.head.append(script);
//     });
// }
// loadScript("https://cdn.tailwindcss.com")
//     .then((result) => {
//         console.log(`Script 1 đã được tải: ${result.src}`);
//         return 123;
//     })
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));

// Fetch API
fetch("https://6867d5c8d5933161d709fda8.mockapi.io/products")
    .then((response) => response.json())
    .then((data) => {
        const todosList = document.getElementById("todos");
        const result = data.map((item) => `<li>${item.name}</li>`).join("");
        todosList.innerHTML = result;
    });

// Xóa todo

const deleteBtn = document.getElementById("delete-btn");
deleteBtn.addEventListener("click", () => {
    fetch("https://6867d5c8d5933161d709fda8.mockapi.io/products/2", { method: "DELETE" })
        .then(() => alert("Xóa thành công"))
        .catch(() => alert("Xóa thất bại"));
});

// Thêm sản phẩm
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", () => {
    fetch("https://6867d5c8d5933161d709fda8.mockapi.io/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "Fresh Wooden Shoes",
            description: "Sản phẩm mới thêm",
            price: "200.85",
            image: "https://picsum.photos/seed/nsmRq3fr/3395/1888?grayscale&blur=3",
        }),
    })
        .then(() => alert("Thêm sản phẩm thành công"))
        .catch(() => alert("Xóa thất bại"));
});

// cập nhật
const updateBtn = document.getElementById("update-btn");
updateBtn.addEventListener("click", () => {
    fetch("https://6867d5c8d5933161d709fda8.mockapi.io/products/26", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            description: "Sản phẩm mới cập nhật",
        }),
    })
        .then(() => {
            console.log("Cập nhật sản phẩm thành công");
        })

        .catch(() => alert("Xóa thất bại"));
});