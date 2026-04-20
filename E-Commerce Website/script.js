document.addEventListener("DOMContentLoaded", () => {

    const products = [
        { id:1, name:"Shoes", price:1200, desc:"Comfortable running shoes", img:"assets/image 1.png" },
        { id:2, name:"HeadPhones", price:1500, desc:"Noise cancelling Head Phones", img:"assets/image 2.png" },
        { id:3, name:"Watch", price:2000, desc:"Stylish wrist watch", img:"assets/image 3.png" },
        { id:4, name:"Backpack", price:900, desc:"Durable backpack", img:"assets/image 4.png" },
        { id:5, name:"Sunglasses", price:500, desc:"UV protection sunglasses", img:"assets/image 5.png" },
        { id:6, name:"T-Shirt", price:45000, desc:"Cotton T-Shirt", img:"assets/image 6.png" },
        { id:7, name:"Laptop", price:20000, desc:"High performance laptop", img:"assets/image 7.png" },
        { id:8, name:"Keyboard", price:700, desc:"Ergonomic keyboard", img:"assets/image 8.png" },
        { id:9, name:"Mouse", price:30000, desc:"Ergonomic mouse", img:"assets/image 9.png" },
        { id:10, name:"Mobile", price:300, desc:"Smartphone 8GB RAM, 256GB Storage", img:"assets/image 10.png" },
        { id:11, name:"Desktop", price:1200, desc:"1440p Monitor", img:"assets/image 11.png" },
        { id:12, name:"Gaming Chair", price:2500, desc:"OHh yeah gaming chair", img:"assets/image 12.png" }
    ];

    const grid = document.getElementById("productGrid");

    if (!grid) {
        console.error("productGrid not found in HTML");
        return;
    }

    products.forEach(p => {
        grid.innerHTML += `
            <div class="card">
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <h4>₹${p.price}</h4>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });

    window.addToCart = function(id) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const item = products.find(p => p.id === id);
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Added to cart!");
    };

});