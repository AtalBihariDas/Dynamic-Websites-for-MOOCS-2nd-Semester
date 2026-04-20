let cart = JSON.parse(localStorage.getItem("cart")) || [];
let address = localStorage.getItem("address");
let total = localStorage.getItem("total");

let summary = document.getElementById("summary");

summary.innerHTML += `<h3>Delivery Address:</h3><p>${address}</p>`;

cart.forEach(item => {
    summary.innerHTML += `
        <p>${item.name} - ₹${item.price}</p>
    `;
});

summary.innerHTML += `<h2>Total Paid: ₹${total}</h2>`;

// Clear cart after order
localStorage.removeItem("cart");