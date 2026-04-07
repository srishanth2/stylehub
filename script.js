let products = [
    {id:1, name:"T-Shirt", price:500, category:"clothing"},
    {id:2, name:"Jeans", price:1200, category:"clothing"},
    {id:3, name:"Shoes", price:2000, category:"footwear"}
];

let cart = [];

// Display products
function displayProducts(data) {
    let container = document.getElementById("product-list");
    container.innerHTML = "";

    data.forEach(p => {
        container.innerHTML += `
            <div class="product">
                <h3>${p.name}</h3>
                <p>Price: ₹${p.price}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}

// Add to cart
function addToCart(id) {
    let product = products.find(p => p.id === id);
    cart.push(product);
    alert("Added to cart!");
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Search
function searchProduct() {
    let value = document.getElementById("search").value.toLowerCase();
    let filtered = products.filter(p => p.name.toLowerCase().includes(value));
    displayProducts(filtered);
}

// Load products
displayProducts(products);