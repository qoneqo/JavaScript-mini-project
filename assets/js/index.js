const btnShoppingCart = document.querySelector('.btn-shopping-cart');
const shoppingCartContainer = document.querySelector('.shopping-cart-container');
shoppingCartContainer.style.display = 'none'

btnShoppingCart.addEventListener('click', () => {
  if (shoppingCartContainer.style.display === 'none') {
    shoppingCartContainer.style.display = 'block'
  } else {
    shoppingCartContainer.style.display = 'none'
  }
})