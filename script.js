let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(name + " added to cart");
}

function openOrderModal() {
  document.getElementById("orderModal").style.display = "block";
  renderCart();
}

function closeModal() {
  document.getElementById("orderModal").style.display = "none";
}

function renderCart() {
  const list = document.getElementById("cartList");
  list.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    list.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  alert("Order placed successfully! ☕");
  cart = [];
  closeModal();
}
function orderWhatsApp() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  let message = "Hello Brew Haven ☕,%0A%0AI would like to order:%0A";

  let total = 0;

  cart.forEach(item => {
    message += `- ${item.name} (₹${item.price})%0A`;
    total += item.price;
  });

  message += `%0ATotal: ₹${total}%0A%0APlease confirm my order.`;

  // 👉 Replace with your number
  const phone = "+91 9347733333";

  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, "_blank");
}
function updateStatus() {
  const now = new Date();
  const hour = now.getHours();

  // ⏰ Café timing (change if needed)
  const openHour = 9;   // 9 AM
  const closeHour = 22; // 10 PM

  const status = document.getElementById("status");

  if (hour >= openHour && hour < closeHour) {
    status.innerHTML = "🟢 Open Now (9 AM – 10 PM)";
    status.style.color = "green";
  } else {
    status.innerHTML = "🔴 Closed (Opens at 9 AM)";
    status.style.color = "red";
  }
}

// run on load
updateStatus();

// update every minute
setInterval(updateStatus, 60000);
