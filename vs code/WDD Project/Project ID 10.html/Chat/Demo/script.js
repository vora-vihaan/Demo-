const foodItems = [
    { id: 1, name: "Veggie Burger", price: 5.55, category: "main", image: "vb.jpeg" },
    { id: 2, name: "Caesar Salad", price: 6.00, category: "salad", image: "cs.jpeg" },
    { id: 3, name: "Fruit Smoothie", price: 5.00, category: "dessert", image: "fs.jpeg.png" },
    { id: 4, name: "Grilled Paneer", price: 6.50, category: "main", image: "gp.png" },
    { id: 5, name: "Mango Lassi", price: 4.50, category: "dessert", image: "ml.png" },
    {id: 6, name: "Veg Manchurian",price: 5.00, category: "main", image:"m.png"},
    // Add up to 30 items similarly...
  ];
  
  let cart = [];

  // Display menu items
  function renderMenu(items) {
    const menuContainer = document.getElementById("menuItems");
    if (!menuContainer) return;
    menuContainer.innerHTML = "";
    items.forEach(item => {
      const div = document.createElement("div");
      div.className = "menu-item";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="info">
          <h3>${item.name}</h3>
          <p>$${item.price.toFixed(2)}</p>
          <button onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
      `;
      menuContainer.appendChild(div);
    });
  }
  
  // Add item to cart
  function addToCart(id) {
    const item = foodItems.find(f => f.id === id);
    if (item) cart.push(item);
    updateCart();
  }
  
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }
  
  function updateCart() {
    const cartList = document.getElementById("cartList");
    const totalPrice = document.getElementById("totalPrice");
    const checkoutButton = document.getElementById("checkoutBtn");
    if (!cartList || !totalPrice) return;
  
    cartList.innerHTML = cart.map((i, idx) => `
      <li>
        ${i.name} - $${i.price.toFixed(2)}
        <button onclick="removeFromCart(${idx})" style="margin-left:10px; color:red; background:none; border:none; cursor:pointer;">✖</button>
      </li>`).join("");
    const total = cart.reduce((sum, i) => sum + i.price, 0);
    totalPrice.textContent = total.toFixed(2);
  
    if (checkoutButton) checkoutButton.style.display = cart.length > 0 ? "inline-block" : "none";
  }
  
  // Search, Filter, Sort
  function applyFilters() {
    let filtered = [...foodItems];
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("filterCategory").value;
    const sort = document.getElementById("sortPrice").value;
  
    if (searchValue) {
      filtered = filtered.filter(item => item.name.toLowerCase().includes(searchValue));
    }
    if (category !== "all") {
      filtered = filtered.filter(item => item.category === category);
    }
    if (sort === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }
    renderMenu(filtered);
  }
  
  // Validate Checkout Form
  function validateCheckout(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
  
    if (!name || !email || !phone || !address) {
      alert("Please fill in all the fields.");
      return false;
    }
    document.getElementById("successMsg").style.display = "block";
    return true;
  }
  
  // Event Listeners
  window.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("searchInput");
    const category = document.getElementById("filterCategory");
    const sort = document.getElementById("sortPrice");
  
    if (search) search.addEventListener("input", applyFilters);
    if (category) category.addEventListener("change", applyFilters);
    if (sort) sort.addEventListener("change", applyFilters);
  
    renderMenu(foodItems);
  });
  