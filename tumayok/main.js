const API = "http://localhost:3002";
const axios = window.axios;
const productList = document.getElementById("productList");
const productForm = document.getElementById("product-form");
const productFormEdit = document.getElementById("product-form-edit");
const id = new URLSearchParams(window.location.search).get("id");
const signin = document.getElementById("signin-form");
const signup = document.getElementById("signup-form");
const userInfo = document.getElementById("user-info");

const logout = ()=>{
    localStorage.removeItem("user");
    window.location.replace("signin.html");
}

if(userInfo){
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user){
        window.location.replace("signin.html");
    }
    userInfo.innerHTML = 
    `
    <span class="me-2">${user?.email}</span>
   <button class="btn btn-primary" onclick="logout()">Dang xuat</button>
    `
}

const register = (user)=>{
    if(!user.name || !user.email || !user.password){
        alert("Dien thong tin");
        return
    }
    axios
    .post(`${API}/register`,user)
    .then((res) => {
        localStorage.setItem("user",JSON.stringify(res.data))
        alert("Dang ky thanh cong");
        window.location.href = "index.html";
    }).catch((err) => {
        alert("Dang ky that bai",err);
    });
}
if(signup){
    signup.addEventListener("submit",(e)=>{
        e.preventDefault();
        const user = {
            email : document.getElementById('email').value,
            username : document.getElementById("username").value,
            password : document.getElementById('password').value,
        }
    })
    register(user);
}

const login = (user)=>{
    if(!user.name || !user.email || !user.password){
        alert("Dien thong tin");
        return
    }
    axios
    .post(`${API}/login`,user)
    .then((res) => {
        localStorage.setItem("user",JSON.stringify(res.data.user))
        window.location.href = "index.html";
        alert("Dang nhap thnah cong");
    }).catch((err) => {
        alert("Dang nhap that bai",err)
    });
}

if(signin){
    signin.addEventListener("submit",(e)=>{
        e.preventDefault();
        const user = {
            email : document.getElementById('email').value,
            password : document.getElementById('password').value,
        }
        login(user);
    })
}

const deleteProduct = (id)=>{
    const comfirm = window.confirm("Ban co muon xao khong");
    if(!comfirm){
        return
    }
    axios
    .delete(`${API}/products/${id}`)
    .then(() => {
        alert('Xoa thanh cong')
        render();
    }).catch((err) => {
        alert("Xoa that bai",err);
    });
}

const updateproduct = (product)=>{
    if(!product.name || !product.price || !product.imageUrl){
        alert("Dien thong tin");
        return
    }
    axios
    .put(`${API}/products/${id}`,product)
    .then((res) => {
        localStorage.setItem("product",JSON.stringify(res.data))
        window.location.href="index.html";
        alert("Sua thanh cong")
    }).catch((err) => {
        alert("Sua that bai",err);
    });
}
if(id){
    axios
    .get(`${API}/products/${id}`)
    .then((res) => {
        document.getElementById("name").value = res.data.name,
        document.getElementById("price").value = res.data.price,
        document.getElementById("imageUrl").value = res.data.imageUrl,
        document.getElementById("category").value = res.data.category
    });
    productFormEdit.addEventListener("submit",(e)=>{
        e.preventDefault();
        const product = {
            name : document.getElementById("name").value.trim(),
            price : document.getElementById("price").value.trim(),
            imageUrl : document.getElementById("imageUrl").value.trim(),
            category : document.getElementById("category").value,
        }
        updateproduct(product); 
    })
}


const addProduct = (product)=>{
    if(!product.name || !product.price || !product.imageUrl){
        alert("Dien thong tin");
        return
    }
    axios
    .post(`${API}/products`,product)
    .then((res) => {
        localStorage.setItem("product",JSON.stringify(res.data))
        window.location.href="index.html";
        alert("them thanh cong")
    }).catch((err) => {
        alert("Them that bai",err);
    });
}

if(productForm){
    productForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const product = {
            name : document.getElementById("name").value.trim(),
            price : document.getElementById("price").value.trim(),
            imageUrl : document.getElementById("imageUrl").value.trim(),
            category : document.getElementById("category").value,
        }
        addProduct(product);
    })
}

const render = ()=>{
    if(!productList){
        return
    }
    axios
    .get(`${API}/products`)
    .then((res) => {
        const result = res.data.map((item,index)=>
        `
        <tr>
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><img src="${item.imageUrl}" width="80px"></td>
        <td>${item.category}</td>
        <td>
          <a href="edit.html?id=${item.id}" class="btn btn-warning">Sua</a>
          <button class="btn btn-danger" onclick="deleteProduct('${item.id}')">Xoa</button>
        </td>
      </tr>
        `
        ).join("")
        productList.innerHTML=result;
    }).catch((err) => {
        alert("Hien thi that bai",err);
    });
}
render();
