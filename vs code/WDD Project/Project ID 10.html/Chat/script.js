const foodItems = [
  { name: "Paneer Tikka", price: 180, image: "Paneer Tikka.jpg" },
  { name: "Veg Biryani", price: 160, image: "Veg Biryani.jpg" },
  { name: "Chole Bhature", price: 140, image: "images/item3.jpg" },
  { name: "Masala Dosa", price: 90, image: "masala dosa.jpg" },
  { name: "Palak Paneer", price: 130, image: "Palak Paneer.jpg" },
  { name: "Aloo Paratha", price: 80, image: "Chole Bhature.jpg" },
  { name: "Veg Manchurian", price: 110, image: "https://i.imgur.com/9V4FSZb.jpg" },
  { name: "Dal Makhani", price: 140, image: "https://i.imgur.com/nHlZ7UI.jpg" },
  { name: "Rajma Chawal", price: 100, image: "https://i.imgur.com/xYfACBo.jpg" },
  { name: "Stuffed Capsicum", price: 120, image: "https://i.imgur.com/0xu0uTp.jpg" },
  { name: "Veg Pulao", price: 100, image: "https://i.imgur.com/1m9ZGvU.jpg" },
  { name: "Pav Bhaji", price: 90, image: "https://i.imgur.com/3wYBdZi.jpg" },
  { name: "Baingan Bharta", price: 110, image: "https://i.imgur.com/3nKkOk1.jpg" },
  { name: "Gobi Paratha", price: 80, image: "https://i.imgur.com/nEbUjcz.jpg" },
  { name: "Kadai Paneer", price: 130, image: "https://i.imgur.com/VcE8myH.jpg" },
  { name: "Veg Kofta", price: 140, image: "https://i.imgur.com/XJLt7rj.jpg" },
  { name: "Tandoori Roti", price: 20, image: "https://i.imgur.com/bWRRYYI.jpg" },
  { name: "Butter Naan", price: 25, image: "https://i.imgur.com/IuXZ45v.jpg" },
  { name: "Veg Thali", price: 180, image: "https://i.imgur.com/yYfUsTa.jpg" },
  { name: "Tomato Soup", price: 70, image: "https://i.imgur.com/ryqVZjR.jpg" },
  { name: "Matar Paneer", price: 130, image: "https://i.imgur.com/nwlTZgU.jpg" },
  { name: "Veg Sandwich", price: 60, image: "https://i.imgur.com/NWgUXET.jpg" },
  { name: "Idli Sambar", price: 80, image: "https://i.imgur.com/xpH0aRf.jpg" },
  { name: "Paneer Bhurji", price: 110, image: "https://i.imgur.com/y71nIwX.jpg" },
  { name: "Hakka Noodles", price: 90, image: "https://i.imgur.com/FVYbYfR.jpg" },
  { name: "Spring Rolls", price: 70, image: "https://i.imgur.com/Oqz0snk.jpg" },
  { name: "Veg Frankie", price: 60, image: "https://i.imgur.com/zBoc1mt.jpg" },
  { name: "Mix Veg Curry", price: 100, image: "https://i.imgur.com/LhK4IuU.jpg" },
  { name: "Khichdi", price: 90, image: "https://i.imgur.com/KLJ2aEe.jpg" },
  { name: "Veg Cutlet", price: 50, image: "https://i.imgur.com/K0lwkIW.jpg" },
  { name: "Bhindi Masala", price: 100, image: "https://i.imgur.com/QeyfNgX.jpg" },
  { name: "Paneer Butter Masala", price: 150, image: "https://i.imgur.com/lFz9snr.jpg" },
  { name: "Veg Pakora", price: 60, image: "https://i.imgur.com/HhGeT9z.jpg" },
  { name: "Samosa", price: 30, image: "https://i.imgur.com/NvUYZ0T.jpg" },
  { name: "Roti Sabzi", price: 80, image: "https://i.imgur.com/JmIKFUU.jpg" },
  { name: "Corn Salad", price: 70, image: "https://i.imgur.com/5PrBkNd.jpg" },
  { name: "Veg Burger", price: 90, image: "https://i.imgur.com/p2RhZcG.jpg" },
  { name: "Dhokla", price: 60, image: "https://i.imgur.com/vTCxzEl.jpg" },
  { name: "Poha", price: 50, image: "https://i.imgur.com/jCEdVaJ.jpg" },
  { name: "Upma", price: 50, image: "https://i.imgur.com/0jMj99F.jpg" },
  { name: "Khaman", price: 50, image: "https://i.imgur.com/zy8BTn2.jpg" },
  { name: "Jeera Rice", price: 90, image: "https://i.imgur.com/8NUUImk.jpg" },
  { name: "Curd Rice", price: 80, image: "https://i.imgur.com/OpruE2f.jpg" },
  // ... add up to 50 items in the same format
];

let cart = [];

function displayItems() {
  const container = document.getElementById("foodItems");
  container.innerHTML = "";
  foodItems.forEach((item, index) => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.image}" alt="${item.name}">
        <div class="card-body">
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
          <button onclick="addToCart(${index})">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

function addToCart(index) {
  cart.push(foodItems[index]);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartItems");
  const total = document.getElementById("totalAmount");
  cartList.innerHTML = "";
  let sum = 0;
  cart.forEach((item, i) => {
    cartList.innerHTML += `<li>${item.name} - ₹${item.price} <button onclick="removeFromCart(${i})">❌</button></li>`;
    sum += item.price;
  });
  total.textContent = sum;
}

function checkout() {
  alert("Thanks for your order!");
  cart = [];
  updateCart();
}

function searchItems() {
  const keyword = document.getElementById("searchBar").value.toLowerCase();
  const filtered = foodItems.filter(item => item.name.toLowerCase().includes(keyword));
  const container = document.getElementById("foodItems");
  container.innerHTML = "";
  filtered.forEach((item, index) => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.image}" alt="${item.name}">
        <div class="card-body">
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
          <button onclick="addToCart(${index})">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", displayItems);
