let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close')
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listproduct')
let listCartHTML = document.querySelector('.listcart');
let iconCartSpan = document.querySelector ('.icon-cart span')

let listProduct = []
let cart = []
iconCart.addEventListener('click',() =>{
body.classList.toggle('showcart')
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showcart')
})
const addDataToHTML = () => {
    listProductHTML.innerHTML =  '';
    if(listProduct.length > 0){
        listProduct.forEach( product => {
let newProduct = document.createElement('div');
newProduct.classList.add('item');
newProduct.dataset.id = product.id;
newProduct.innerHTML = `
  <img src="${product.image}" alt="">
        <h2>${product.name}</h2>
        <div class="price">${product.price}</div>
        <button class="addcart">
          Add To cart
        </button>`;
        listProductHTML.appendChild(newProduct)
        })
    }
}
listProductHTML.addEventListener('click', (event) => {
let positionClick = event.target;
if(positionClick.classList.contains('addcart')){
    let product_id = positionClick.parentElement.dataset.id;
 addToCart()
}
})

const addToCart = (product_id) =>{
    let positionThisProductCart = cart.findIndex((value) => value.product_id == product_id)
if(cart.length <= 0 ){
    cart = [{
        product_id:product_id,
        quantity: 1
    }]
}else if(positionThisProductCart < 0){
cart.push({
    product_id: product_id,
    quantity:1
})

}else{
    cart[positionThisProductCart].quantity = cart[positionThisProductCart].quantity + 1
}
addCartHTML()
}
const addCartHTML = () => {
    listCartHTML.innerHTML = '';
    if(cart.length > 0){
        cart.forEach(cart => {
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.innerHTML = `
            <div class="image">
    <img src="${product.image}" alt="">
  </div>
  <div class="name">
    name
  </div>
  <div class="totalprice">
  ${product.price}
  </div>
  <div class="quantity">
    <span class="minus">-</span>
    <span>1</span>
    <span class="plus">+</span>
  </div>`;
  listCartHTML.appendChild(newCart)
        })
    }
}
const initApp = () => {
fetch('product.json')
.then(response => response.json())
.then(data => {
    listProduct = data;
  addDataToHTML()
})
}
initApp()