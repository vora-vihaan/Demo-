let cart = [];

function addToCart(button) {
  const item = button.closest('.menu-item');
  const name = item.getAttribute('data-name');
  const price = parseFloat(item.getAttribute('data-price'));

  const existingItem = cart.find(i => i.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const total = document.getElementById('total');
  cartItems.innerHTML = '';

  let totalPrice = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`;
    cartItems.appendChild(li);
    totalPrice += item.price * item.quantity;
  });

  total.textContent = totalPrice.toFixed(2);
}

function showCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' });
}

function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const address = document.getElementById('address').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!name || !address || !email || !phone) {
    alert("Please fill out all fields.");
    return false;
  }

  alert("Order placed successfully!\nThank you for ordering with Delish Bites.");
  cart = [];
  updateCart();
  document.querySelector('form').reset();
  return false;
}
