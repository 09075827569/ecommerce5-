
// const product = [
//   { id: 0, image: 'image/POWER-OIL-removebg-preview.png', title: 'ground nut oil', price: 120 },
//   { id: 1, image: 'image/POWER-OIL-removebg-preview.png', title: 'ground nut oil', price: 120 },
//   { id: 2, image: 'image/POWER-OIL-removebg-preview.png', title: 'red oil', price: 190 },
//   { id: 3, image: 'image/POWER-OIL-removebg-preview.png', title: 'sugar', price: 900 },
//   { id: 5, image: 'image/POWER-OIL-removebg-preview.png', title: 'milk', price: 120 },
//    { id: 6, image: 'image/POWER-OIL-removebg-preview.png', title: 'milk', price: 120 },
//     { id: 7, image: 'image/POWER-OIL-removebg-preview.png', title: 'milk', price: 120 },
//      { id: 9, image: 'image/POWER-OIL-removebg-preview.png', title: 'milk', price: 120 },
//       { id: 10, image: 'image/POWER-OIL-removebg-preview.png', title: 'milk', price: 120 },
//        { id: 11, image: 'image/POWER-OIL-removebg-preview.png', title: 'milk', price: 120 }
  
// ];

// // Remove duplicates if necessary (e.g. by id)
// const categories = [...new Map(product.map(item => [item.id, item])).values()];

// let i = 0;
// document.getElementById('root2').innerHTML = categories.map((item) => {
//   const { image, title, price } = item;
//   return `
//     <div class='box29'>
//       <div class='img-box'>
//         <img class='images' src="${image}" />
//       </div>
//       <div class='bottom'>
//         <p>${title}</p>
//         <h2>$ ${price}.00</h2>
//         <button onclick='addtocart(${i++})'>Add to cart</button>
//       </div>
//     </div>
//   `;
// }).join('');

// let cart = [];
// function addtocart(index) {
//   const existingItem = cart.find(item => item.id === categories[index].id);
//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     cart.push({ ...categories[index], quantity: 1 });
//   }

//   displaycart();
//   updateTotal();
//   document.getElementById("count").innerText = cart.length;
//   toggleCart();
//   saveCartToLocalStorage();
//   document.getElementById("sidebar").style.display = "block";
// }


//   // Show sidebar
//   document.querySelector(".sidebar").classList.add("show");

//   // Save to localStorage
//   localStorage.setItem("cartItems", JSON.stringify(cart));
  




// setTimeout(() => {
//   document.querySelector(".sidebar").classList.remove("show");
// }, 5000);


// function toggleCart() {
//   const sidebar = document.querySelector('.sidebar');
//   sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
// }


// function delElement(index) {
//   cart.splice(index, 1);
//   displaycart();
//   updateTotal();
//   document.getElementById("count").innerText = cart.length;
//   localStorage.setItem("cartItems", JSON.stringify(cart));
// }

// function displaycart() {
//   let j = 0;
//   if (cart.length === 0) {
//     document.getElementById('cartitem').innerHTML = "Your cart is empty";
//   } else {
//     document.getElementById('cartitem').innerHTML = cart.map((item, index) => {
//       return `
//         <div class='cart-item'>
//           <div class='row-img'>
//             <img class='rowing' src="${item.image}" />
//           </div>
//           <p style='font-size:12px;'>${item.title}</p>
//           <h2 style='font-size:15px;'>$ ${item.price * item.quantity}.00</h2>
//           <div>
//             <button onclick='changeQuantity(${index}, -1)'>-</button>
//             <span>${item.quantity}</span>
//             <button onclick='changeQuantity(${index}, 1)'>+</button>
//           </div>
//           <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
//         </div>
//       `;
//     }).join('');
//   }
// }
// function changeQuantity(index, delta) {
//   cart[index].quantity += delta;
//   if (cart[index].quantity <= 0) {
//     delElement(index);
//   }
//   displaycart();
//   updateTotal();
//   saveCartToLocalStorage();
// }
// function saveCartToLocalStorage() {
//   localStorage.setItem('cart', JSON.stringify(cart));
// }


// function saveCartToLocalStorage() {
//   localStorage.setItem('cart', JSON.stringify(cart));
// }

// function loadCartFromLocalStorage() {
//   const saved = localStorage.getItem('cart');
//   if (saved) {
//     cart = JSON.parse(saved);
//     displaycart();
//     updateTotal();
//     document.getElementById("count").innerText = cart.length;
//   }
// }
// window.onload = function() {
//   loadCartFromLocalStorage();
// };

// function updateTotal() {
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   document.getElementById('total').innerText = `$ ${total.toFixed(2)}`;
// }

// function toggleSidebar() {
//   const sidebar = document.getElementById("sidebar");
//   sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
// }


