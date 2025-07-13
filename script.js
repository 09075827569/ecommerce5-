let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close')
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listproduct')

let listProduct = []
iconCart.addEventListener('click',() =>{
body.classList.toggle('showcart')
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showcart')
})

const initApp = () => {
fetch('product.json')
.then(response => response.json())
.then(data => {
    listProduct = data;
    console.log(listProduct)
})
}
initApp()