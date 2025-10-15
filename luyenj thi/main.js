const API = "http://localhost:3000/products";
const axios = window.axios;
const productForm = document.getElementById("product-form");
const productFormEdit = document.getElementById("product-form-edit");
const productList = document.getElementById("productList");
const id =  new URLSearchParams(window.location.search).get("id");

if(id){
  axios
  .get(`${API}/${id}`)
  .then((response)=>{
      document.getElementById("name").value = response.data.name;
      document.getElementById("price").value= response.data.price;
      document.getElementById("quantity").value= response.data.quantity;
      document.getElementById("imageUrl").value= response.data.imageUrl;
      document.getElementById("category").value= response.data.category;
  });
  productFormEdit.addEventListener("submit",(e)=>{
    e.preventDefault();
    const product = {
      name : document.getElementById("name").value,
      price : document.getElementById("price").value,
      quantity : document.getElementById("quantity").value,
      imageUrl : document.getElementById("imageUrl").value,
      category : document.getElementById("category").value,
    };
    updateproduct(product);
  });
}
const updateproduct = (product) =>{
  if(!product.name || !product.price || !product.quantity){
    alert("Dien du thong tin");
    return;
  }
  axios
  .put(`${API}/${id}`,product)
  .then(()=>{
    window.location.href ="index.html";
  })
  .catch(()=>alert("Them that bai"));

} 
const render = () =>{
  if(!productList)return;
  axios
  .get(API)
  .then((response) => {
    const result = response.data.map((item,index)=>
    `
    <tr>
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td><img src="${item.imageUrl}" width="80px"></td>
        <td>${item.category}</td>
        <td>
          <a href="edit.html?id=${item.id}" class="btn btn-warning">Sua</a>
          <button class="btn btn-danger" onclick="deleteProduct('${item.id}')">Xoa</button>
        </td>
      </tr>
    `
    ).join("")
    productList.innerHTML = result
  }).catch((err) => {
    console.error ("Them that bai",err);
  });
}
render();

//them san pham
const addProduct = (product) =>{
  if(!product.name || !product.price || !product.quantity){
    alert("Dien du thong tin");
    return;
  }
  axios
  .post(API,product)
  .then(()=>{
    window.location.href ="index.html";
  })
  .catch(()=>alert("Them that bai"));
}

if(productForm){
  productForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const product = {
      name : document.getElementById("name").value,
      price : document.getElementById("price").value,
      quantity : document.getElementById("quantity").value,
      imageUrl : document.getElementById("imageUrl").value,
      category : document.getElementById("category").value,
    };
    addProduct(product);
  });
};
if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const user = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        };
        signin(user);
    });
}
const signin = (user) => {
    if (!user.email || !user.password) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    axios
        .post(`${API}/login`, user)
        .then(() => alert("Đăng nhập thành công"))
        .catch(() => alert("Đăng nhập thất bại"));
};
const signup = (user) => {
    if (!user.email || !user.password) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    axios
        .post(`${API}/register`, user)
        .then(() => alert("Đăng ký thành công"))
        .catch(() => alert("Đăng ký thất bại"));
};
