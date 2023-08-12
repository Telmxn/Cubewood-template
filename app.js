const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-menu");
const productContainer = document.querySelector(".product-container");
burger.addEventListener("click", () => {
  menu.classList.toggle("openMenu");
});
const productArr = [
  {
    title: "Jalis Counter stool",
    category: "Vase",
    price: 16.48,
    discount: 6.48,
    src: "./images/cover1.png",
  },
  {
    title: "Pouf Chair",
    category: "Armchair",
    price: 16.48,
    discount: 6.48,
    src: "./images/cover2.png",
  },
  {
    title: "Marvelous Modern 3 Seater",
    category: "Desk decor",
    price: 16.48,
    discount: 6.48,
    src: "./images/cover3.png",
  },
  {
    title: "Pouf Chair",
    category: "Wall art",
    price: 16.48,
    discount: 6.48,
    src: "./images/cover4.png",
  },
  {
    title: "Jalis Counter stool",
    category: "Bed table",
    price: 16.48,
    discount: 6.48,
    src: "./images/cover5.png",
  },
  {
    title: "Cut Chair with 4 Spoke Base",
    category: "Wall art",
    price: 16.48,
    discount: 6.48,
    src: "./images/cover6.png",
  },
  {
    title: "Lucky Chair",
    category: "Basket",
    price: 16.48,
    discount: 6.48,
    src: "./images/cover7.png",
  },
  {
    title: "Pouf Chair",
    category: "Bed table",
    price: 16.48,
    discount: 6.48,
    src: "./images/cover8.png",
  },
  {
    title: "Lucky Chair",
    category: "Bed table",
    price: 16.48,
    discount: 6.48,
    src: "./images/cover9.png",
  },
  {
    title: "Yard SeChair",
    category: "Cactus",
    price: 16.48,
    discount: 6.48,
    src: "./images/cover10.png",
  },
];
let products = productArr;

changeProducts();
createProducts();
window.addEventListener("resize", () => {
  changeProducts();
  productContainer.innerHTML = "";
  createProducts();
});

// Functions
function changeProducts() {
  if (window.innerWidth < 768) {
    products = productArr.slice(1, 6);
  } else {
    products = productArr;
  }
}
function createProducts() {
  products.map((obj) => {
    console.log(obj);
    const product = document.createElement("div");
    product.classList.add("product");
    const img = document.createElement("img");
    img.src = obj.src;
    product.append(img);
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const title = document.createElement("h5");
    title.classList.add("product.title");
    title.innerText = obj.title;
    const category = document.createElement("p");
    category.classList.add("product.category");
    category.innerText = obj.category;
    const price = document.createElement("p");
    price.classList.add("product-price");
    price.innerText = `$${obj.price}`;
    const discount = document.createElement("span");
    discount.classList.add("product-discount");
    discount.innerText = `$${obj.discount}`;
    price.append(discount);
    productInfo.append(title);
    productInfo.append(category);
    productInfo.append(price);
    product.append(productInfo);
    productContainer.append(product);
  });
}
