
const product = [
  { id: 0, image: 'image/POWER-OIL-removebg-preview.png', title: 'ground nut oil', price: 120 },
  { id: 1, image: 'image/orange-removebg-preview.png', title: 'Orange Juice', price: 120 },
  { id: 2, image: 'image/apple-removebg-preview.png', title: 'Apple Juice', price: 190 },
  { id: 3, image: 'image/toilet-removebg-preview.png', title: 'Toilet papper', price: 900 },
  { id: 5, image: 'image/protein-removebg-preview.png', title: 'Protein Shake', price: 120 },
   { id: 6, image: 'image/pizza-removebg-preview.png', title: 'Pizza', price: 120 },
    { id: 7, image: 'image/banana-removebg-preview.png', title: 'Banana', price: 120 },
     { id: 9, image: 'image/snack-removebg-preview.png', title: 'Potatoes-Snack', price: 120 },
      { id: 10, image: 'image/beef-removebg-preview.png', title: 'Beef', price: 120 },
       { id: 11, image: 'image/POWER-OIL-removebg-preview.png', title: 'milk', price: 120 }
  
];


// Remove duplicates if necessary (e.g. by id)
const categories = [...new Map(product.map(item => [item.id, item])).values()];

let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
  const { image, title, price } = item;
  return `
    <div class='box'>
      <div class='img-box'>
        <img class='images' src="${image}" />
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>
        <button onclick='addtocart(${i++})'>Add to cart</button>
      </div>
    </div>
  `;
}).join('    ');

let cart = [];
function addtocart(index) {
  const existingItem = cart.find(item => item.id === categories[index].id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...categories[index], quantity: 1 });
  }

  displaycart();
  updateTotal();
;
  toggleCart();
  saveCartToLocalStorage();
  document.getElementById("sidebar").style.display = "block";
}


  // Show sidebar
  document.querySelector(".sidebar").classList.add("show");

  // Save to localStorage
  localStorage.setItem("cartItems", JSON.stringify(cart));
  




setTimeout(() => {
  document.querySelector(".sidebar").classList.remove("show");
}, 5000);


function toggleCart() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
}


function delElement(index) {
  cart.splice(index, 1);
  displaycart();
  updateTotal();
  document.getElementById("count").innerText = cart.length;
  localStorage.setItem("cartItems", JSON.stringify(cart));
}

function displaycart() {
  let j = 0;
  if (cart.length === 0) {
    document.getElementById('cartitem').innerHTML = "Your cart is empty";
  } else {
    document.getElementById('cartitem').innerHTML = cart.map((item, index) => {
      return `
        <div class='cart-item'>
          <div class='row-img'>
            <img class='rowing' src="${item.image}" />
          </div>
          <p style='font-size:12px;'>${item.title}</p>
          <h2 style='font-size:15px;'>$ ${item.price * item.quantity}.00</h2>
          <div>
            <button class='btnnn' onclick='changeQuantity(${index}, -1)'>-</button>
            <span>${item.quantity}</span>
            <button class='btnnn' onclick='changeQuantity(${index}, 1)'>+</button>  <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
          </div>
          
        </div>
      `;
    }).join('');
  }
}
function changeQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    delElement(index);
  }
  displaycart();
  updateTotal();
  saveCartToLocalStorage();
}
function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
}



function loadCartFromLocalStorage() {
  const saved = localStorage.getItem('cart');
  if (saved) {
    cart = JSON.parse(saved);
    displaycart();
    updateTotal();
    document.getElementById("count").innerText = cart.length;
  }
}
window.onload = function() {
  loadCartFromLocalStorage();
};

function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById('total').innerText = `$ ${total.toFixed(2)}`;
}
  const hamburger = document.getElementById('hamburger');
  const body = document.body;

  hamburger.addEventListener('click', () => {
    body.classList.toggle('showSidebar');
  });



// Sample data for new products
const newItems = [
  { id: 12, image: 'image/honey.png', title: 'Golden Honey', price: 180 },
  { id: 13, image: 'image/cereal.png', title: 'Organic Cereal', price: 125 },
  { id: 14, image: 'image/milk.png', title: 'Fresh Milk', price: 90 },
  { id: 15, image: 'image/honey.png', title: 'Golden Honey', price: 180 },
  { id: 16, image: 'image/cereal.png', title: 'Organic Cereal', price: 125 },
  { id: 17, image: 'image/milk.png', title: 'Fresh Milk', price: 90 },
   { id: 18, image: 'image/milk.png', title: 'Fresh Milk', price: 90 },
   { id: 19, image: 'image/milk.png', title: 'Fresh Milk', price: 90 },
   { id: 20, image: 'image/milk.png', title: 'Fresh Milk', price: 90 },
   { id: 21, image: 'image/milk.png', title: 'Fresh Milk', price: 90 }
];

// Add new items to categories array
newItems.forEach(item => categories.push(item));
let j = categories.length - newItems.length; // starting index for new items

document.getElementById('root2').innerHTML = newItems.map((item) => {
  const { image, title, price } = item;
  return `
    <div class='box'>
      <div class='img-box'>
        <img class='images' src="${image}" />
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>
        <button onclick='addtocart(${j++})'>Add to cart</button>
      </div>
    </div>
  `;
}).join('');
