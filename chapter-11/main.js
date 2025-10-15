const API = "http://localhost:3000/products";
const axios = window.axios;
const productList = document.getElementById("productList");
const productForm = document.getElementById("product-form");
const productFormEdit = document.getElementById("product-form-edit");


const id = new URLSearchParams(window.location.search).get("id");
if (id) {
    axios.get(`${API}/${id}`).then((response) => {
        document.getElementById("name").value = response.data.name;
        document.getElementById("price").value = response.data.price;
    });
    productFormEdit.addEventListener("submit", (e) => {
        e.preventDefault();
        const product = {
            name: document.getElementById("name").value,
            price: document.getElementById("price").value,
        };
        updateProduct(product);
    });
}

if (productForm) {
  productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const product = {
      name: document.getElementById("name").value,
      price: document.getElementById("price").value,
    };
    addProduct(product);
  });
}

const addProduct = (product) => {
  if (!product.name || !product.price) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }
  axios
    .post(API, product)
    .then(() => {
      // alert("Thêm sản phẩm thành công");
      window.location.href = "index.html"; 
    })
    .catch(() => alert("Thêm sản phẩm thất bại"));
};
const updateProduct = (product) => {
    if (!product.name || !product.price) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    axios
        .put(`${API}/${id}`, product)
        .then(() => {
            // alert("Cập nhật sản phẩm thành công");
            window.location.href = "index.html";
        })
        .catch(() => alert("Cập nhật sản phẩm thất bại"));
    return;
};

const deleteProduct = (id) => {
  if (!confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) return;
  axios
    .delete(`${API}/${id.toString()}`)
    .then(() => {
      alert("Xóa thành công");
      render();
    })
    .catch((err) => {
      console.error("Lỗi khi xóa:", err);
      alert("Xóa thất bại");
    });
};


const render = () => {
  if (!productList) return;
  axios
    .get(API)
    .then((response) => {
      const result = response.data
        .map(
          (item, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>
              <a href="./edit.html?id=${item.id}" class="btn btn-primary">Sửa</a>
              <button class="btn btn-danger" onclick="deleteProduct('${item.id}')">Xóa</button>
            </td>
          </tr>
        `
        )
        .join("");
      productList.innerHTML = result;
    })
    .catch((error) => {
      console.error("Lỗi khi tải danh sách:", error);
    });
};

render();
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