let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cartItems");

let total = 0;

cart.forEach(item => {
    total += item.price;
    container.innerHTML += `
        <div class="card">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
        </div>
    `;
});

document.getElementById("total").innerText = "Total: ₹" + total;
localStorage.setItem("total", total);