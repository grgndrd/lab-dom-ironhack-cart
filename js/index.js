// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subTotal = product.querySelector('.subtotal span');
  let total = (subTotal.innerHTML =
    Number(price.innerHTML) * Number(quantity.value));
  return Number(total);
  //... your code goes here
}

function calculateAll() {
  let total = 0;
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i])
  }

  let total2 = document.querySelector('#total-value span');
  total2.innerHTML = total;

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
