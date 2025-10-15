const API = "http://localhost:3000";
const axios = window.axios;
const productList = document.getElementById("productList");
const productForm = document.getElementById("product-form");
const productFormEdit = document.getElementById("product-form-edit");
const imageInput = document.getElementById("imageUrl");
const preview = document.getElementById("preview");
let imageBase64 = "";
const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");
const userInfo = document.getElementById("user-info");
const id = new URLSearchParams(window.location.search).get("id");


const update = (product)=>{
  if(!product.name || !product.price || !product.quantity){
    alert("Dien thong tin");
    return
  }else if(product.price < 0 || product.quantity < 0){
    alert("Gia va so luong < 0");
    return
  }
  axios
   .put(`${API}/products/${id}`, product)
  .then(() => {
    window.location.href = "index.html";
  }).catch((err) => {
    alert("Them that bai",err);
  });
}

if(id){
  axios.get(`${API}/products/${id}`)
  .then((result) => {
    document.getElementById('name').value = result.data.name;
    document.getElementById('price').value = result.data.price;
    document.getElementById('quantity').value = result.data.quantity;
    imageBase64 = result.data.imageUrl;
    preview.src =  result.data.imageUrl;
    document.getElementById('category').value = result.data.category;
  });
  productFormEdit.addEventListener("submit",(e)=>{
    e.preventDefault();
    const product = {
      name : document.getElementById("name").value,
      price : document.getElementById("price").value,
      quantity : document.getElementById("quantity").value,
      imageUrl : imageBase64,
      category : document.getElementById("category").value,
    };
    update(product);
  })
  
}


const render = ()=>{
  if(!productList){
    return
  }
  axios
  .get(`${API}/products`)
  .then((result) => {
    const response = result.data.map((item,index)=>{
      return `
      <tr>
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td><img src="${item.imageUrl}" width="80px"></td>
        <td>${item.category}</td>
        <td>
          <a href="add.html?id=${item.id}" class="btn btn-warning">Sua</a>
          <button class="btn btn-danger" onclick="deleteProduct('${item.id}')">Xoa</button>
        </td>
      </tr>
      `
    }).join("");
    productList.innerHTML = response;
  }).catch((err) => {
        alert("hien thi that bai",err);

  });
}
render();

const deleteProduct = (id) => {
  if (!confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) return;
  axios
    .delete(`${API}/products/${id}`)
    .then(() => {
      alert("Xóa thành công!");
      render();
    })
    .catch((err) => {
      alert("Xóa thất bại!",err);
    });
};


//them san pham
const addproduct = (product) =>{
  if(!product.name || !product.price || !product.quantity){
    alert("Dien thong tin");
    return
  }else if(product.price < 0 || product.quantity < 0){
    alert("Gia va so luong < 0");
    return
  }
  axios
  .post(`${API}/products`,product)
  .then(() => {
    window.location.href = "index.html";
  }).catch((err) => {
    alert("Thêm thất bại: ",err);
  });
}

if(productForm){
  productForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const product = {
      name : document.getElementById("name").value.trim(),
      price : document.getElementById("price").value,
      quantity : document.getElementById("quantity").value,
      imageUrl : imageBase64,
      category : document.getElementById("category").value,
    };
    addproduct(product);
  });
};

if(imageInput){
  imageInput.addEventListener("change",(e)=>{
    e.preventDefault();
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = ()=>{
        imageBase64 = reader.result;
        if(preview){
          preview.src = imageBase64;
        };
      }
      reader.readAsDataURL(file);
    }
  })
}
if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const user = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        };

        signup(user);
    });
}

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
        .then((res) => {
        alert("Đăng nhap thành công!");
       setTimeout(() => {
        window.location.href = "./index.html"; 
      }, 100);
}).catch((err) => {
    alert("Thêm thất bại: ",err);
});
};


const signup = (user) => {
  if (!user.username || !user.email || !user.password) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }else if (user.password.length < 6){
     alert("Mật khẩu phải ít nhất 6 ký tự");
      return;
  }
  axios.post(`${API}/register`, user)
  .then(() => {
      window.location.href = "signin.html";
  })
  .catch((err) => {
    alert("Thêm thất bại: " + (err.response?.data?.message || err.message));
  });


};

if (userInfo) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        window.location.replace("signin.html");
    }
    userInfo.innerHTML = `
        <span class="me-2">${user?.email}</span>
        <button class="btn btn-primary" onclick="logout()">Đăng xuất</button>
    `;
}

const logout = () => {
    localStorage.removeItem("user");
    window.location.replace("signin.html"); 
};