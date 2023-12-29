// Sample Categories
const categories = [
    {
        id: 1,
        name: 'Nature Sounds',
        products: [
            { id: 101, name: 'Rainforest Ambience', price: 15, image: 'rf.jpg' },
            { id: 102, name: 'Ocean Waves', price: 20, image: 'ow.jpg' }
            // More products
        ]
    },
    {
        id: 2,
        name: 'Urban Sounds',
        products: [
            { id: 201, name: 'City Traffic', price: 10, image: 'ct.jpg' },
            { id: 202, name: 'Subway Station', price: 12, image: 'ss.jpg' }
            // More products
        ]
    }
    // More categories
];

// Shopping Cart
let shoppingCart = [];

// Display Categories and Their Products
function displayCategories() {
    const categoriesContainer = document.getElementById('categories-container');
    categoriesContainer.innerHTML = '';

    categories.forEach(category => {
        let categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.innerHTML = `<h3>${category.name}</h3>`;

        category.products.forEach(product => {
            let productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <p>${product.name}</p>
                <img src="${product.image}" alt="${product.name}" width="100" height="100">
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            categoryDiv.appendChild(productDiv);
        });

        categoriesContainer.appendChild(categoryDiv);
    });
}

// Add Item to Cart
function addToCart(productId) {
    let product = categories.flatMap(category => category.products).find(p => p.id === productId);
    shoppingCart.push(product);
    displayCart();
}

// Remove Item from Cart
function removeFromCart(productId) {
    shoppingCart = shoppingCart.filter(item => item.id !== productId);
    displayCart();
}

// Display Shopping Cart
function displayCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    shoppingCart.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(itemDiv);
    });
}

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    displayCategories();
    displayCart();
});
