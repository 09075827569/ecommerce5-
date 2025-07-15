// const product = [
//     {
//         id:0,
//         image: 'image/POWER-OIL-removebg-preview.png',
//         title: 'ground nut oil',
//         price: 120,
//     },
//     {
//         id:1,
//         image: 'image/POWER-OIL-removebg-preview.png',
//         title: 'ground nut oil',
//         price: 120,
//     },
//     {
//         id:0,
//         image: 'image/POWER-OIL-removebg-preview.png',
//         title: 'red oil',
//         price: 190,
//     },
//     {
//         id:2,
//         image: 'image/POWER-OIL-removebg-preview.png',
//         title: 'sugar',
//         price: 900,
//     },
//     {
//         id:3,
//         image: 'image/POWER-OIL-removebg-preview.png',
//         title: 'milk',
//         price: 120,
//     }

// ];
// const categories = [...new Set(product.map((item) =>
//     {return item} 
// ))]
// let i=0;
// document.getElementById('root').innerHTML = categories.map((item) =>
// {
//     var {image,title,price} = item;
//     return(
//         `<div class ='box'>
//         <div class = 'img-box'>
//         <img img class ='images' src=${image}></img>
//         </div>
//         <div class = 'bottom'>
//         <p>${title}</p>
//         <h2>$ ${price}.00</h2>
//         `+"<button onclick= 'addtocart("+(i++)+")'>Add to cart</button>"+
//         `</div>
//         </div>`

//     )
// }
// ).join('')

// var cart = []
// function addtocart(a){
//     cart.push({...categories[a]});
//     displaycart()
// }
// function displaycart(a){
//     let j = 0;
//     if(cart.length==0){
//         document.getElementById('cartitem').innerHTML = "your cart is empty"
//     }
//     else{
//         document.getElementById('cartitem').innerHTML= cart.map((item) =>
//         {
//             var{image,title,price}= item;
//             return(
//                 `div class=' cart-item'
//                 <div class='row=img'>
//                 <img class='rowing' src=${image}>
//                 </div>
//                 <p style= 'font-size:12px;'>${title}</p>
//                 <h2 style = 'font-size: 15px;'>$ ${price}.00</h2>
//                 `+"<i class = 'fa-solid fa-trash' onclic='delElement("+ (j++)+")'><i/></div>"
//             )
//         }).join(';')
//     }
// }

const product = [
  { id: 0, image: 'image/POWER-OIL-removebg-preview.png', title: 'ground nut oil', price: 120 },
  { id: 1, image: 'image/POWER-OIL-removebg-preview.png', title: 'ground nut oil', price: 120 },
  { id: 2, image: 'image/POWER-OIL-removebg-preview.png', title: 'red oil', price: 190 },
  { id: 3, image: 'image/POWER-OIL-removebg-preview.png', title: 'sugar', price: 900 },
  { id: 4, image: 'image/POWER-OIL-removebg-preview.png', title: 'milk', price: 120 }
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
}).join('');

let cart = [];

function addtocart(index) {
  cart.push({ ...categories[index] });
  displaycart();
  updateTotal();
  document.getElementById("count").innerText = cart.length;
}

function delElement(index) {
  cart.splice(index, 1);
  displaycart();
  updateTotal();
  document.getElementById("count").innerText = cart.length;
}

function displaycart() {
  let j = 0;
  if (cart.length === 0) {
    document.getElementById('cartitem').innerHTML = "Your cart is empty";
  } else {
    document.getElementById('cartitem').innerHTML = cart.map((item) => {
      const { image, title, price } = item;
      return `
        <div class='cart-item'>
          <div class='row-img'>
            <img class='rowing' src="${image}" />
          </div>
          <p style='font-size:12px;'>${title}</p>
          <h2 style='font-size:15px;'>$ ${price}.00</h2>
          <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
        </div>
      `;
    }).join('');
  }
}

function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('total').innerText = `$ ${total.toFixed(2)}`;
}
