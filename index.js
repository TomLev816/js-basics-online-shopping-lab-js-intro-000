var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push(Object.assign({} , {itemName: item}, {itemPrice: Math.floor(Math.random() * Math.floor(100))}))
 return `${item} has been added to your cart.`
}

function viewCart(){
  if (cart.length === 0){
    return 'Your shopping cart is empty.'
  } else {
    let theCart = []
    for (let i = 0; i < cart.length; i++){
      theCart.push(`${cart[i].itemName} at ${cart[i].itemPrice}`)
    }
return 'The line is currently:' + theCart
  }
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
