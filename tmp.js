document.querySelectorAll(".buy-button").forEach(button => {
    button.addEventListener("click", function () {

        const name = this.dataset.name;
        const price = parseInt(this.dataset.price);

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push({ name, price });

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Produk dimasukkan ke keranjang!");
    });
});

if (window.location.pathname.includes("keranjang.html")) {
    loadCart();
}

function loadCart() {
    const cartContainer = document.getElementById("cart-items");
    const totalElement = document.getElementById("total-price");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <span>${item.name} — Rp ${item.price.toLocaleString()}</span>
                <button onclick="removeItem(${index})">Hapus</button>
            </div>
        `;
    });

    totalElement.textContent = "Rp " + total.toLocaleString();
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}


function checkout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    alert("Pesanan berhasil dibuat! Terima kasih telah berbelanja.");

    localStorage.removeItem("cart");
    loadCart();
}
