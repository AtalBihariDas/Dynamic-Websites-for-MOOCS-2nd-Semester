function placeOrder() {
    const address = document.getElementById("address").value;

    if (!address) {
        alert("Enter address!");
        return;
    }

    localStorage.setItem("address", address);
    window.location.href = "order.html";
}