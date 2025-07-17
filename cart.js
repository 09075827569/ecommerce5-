let cart = [];

window.onload = function () {
  loadCartFromLocalStorage();
};

function loadCartFromLocalStorage() {
  const saved = localStorage.getItem('cart');
  if (saved) {
    cart = JSON.parse(saved);
    displayCart();
    updateTotal();
    document.getElementById("count").innerText = cart.length;
  } else {
    document.getElementById('cartitem').innerHTML = "Your cart is empty";
  }
}

function displayCart() {
  const container = document.getElementById('cartitem');
  if (cart.length === 0) {
    container.innerHTML = "Your cart is empty";
    return;
  }

  container.innerHTML = cart.map((item, index) => `
    <div class='cart-item'>
      <div class='row-img'>
        <img class='rowing' src="${item.image}" />
      </div>
      <p style='font-size:12px;'>${item.title}</p>
      <h2 style='font-size:15px;'>$ ${(item.price * item.quantity).toFixed(2)}</h2>
      <div>
        <button onclick='changeQuantity(${index}, -1)'>-</button>
        <span>${item.quantity}</span>
        <button onclick='changeQuantity(${index}, 1)'>+</button>
      </div>
      <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
    </div>
  `).join('');
}

function changeQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    delElement(index);
  } else {
    saveCartToLocalStorage();
    displayCart();
    updateTotal();
  }
}

// function delElement(index) {
//   cart.splice(index, 1);
//   saveCartToLocalStorage();
//   displayCart();
//   updateTotal();
//   document.getElementById("count").innerText = cart.length;
// }

function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById('total').innerText = `$ ${total.toFixed(2)}`;
}
