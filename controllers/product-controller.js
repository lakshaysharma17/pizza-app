// It is a glue between model and view(html)

import productOperations from "../scripts/services/productOperations.js";

async function loadPizzas() {
            try {
                // Show loading state
                const outputDiv = document.querySelector('#output');
                outputDiv.innerHTML = '<div class="col-12 text-center"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div><p class="mt-2">Loading delicious pizzas...</p></div>';
                
                const pizzas = await productOperations.loadProducts();
                console.log('pizzas are', pizzas);
                
                // Clear loading state
                outputDiv.innerHTML = '';
                
                for (let pizza of pizzas) {
                    preparePizzaCard(pizza);
                }
                
            } catch (error) {
                console.error('Error loading pizzas:', error);
                const outputDiv = document.querySelector('#output');
                outputDiv.innerHTML = '<div class="col-12 text-center"><div class="alert alert-info">Loading menu items...</div></div>';
            }
        }

        // Initialize the app
        loadPizzas();
/*
<div class="col-4">
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>*/

function addToCart(){
    // this - (has current calling object reference)
    console.log('Add to cart', this);
            const currentButton = this;
            const pizzaId = currentButton.getAttribute('product-id');
            console.log('pizza id is', pizzaId);
            productOperations.searchProducts(pizzaId);
            
            // Update button state
            currentButton.innerText = 'Added!';
            currentButton.disabled = true;
            
            printBasket();
}

function deleteFromCart() {
            const currentButton = this;
            const pizzaId = currentButton.getAttribute('product-id');
            console.log('Removing pizza id:', pizzaId);
            productOperations.removeFromCart(pizzaId);
            printBasket();
        }

function calculateCartTotal() {
            const cartProducts = productOperations.getProductsInCart();
            return cartProducts.reduce((total, product) => total + parseFloat(product.price), 0);
        }

function printBasket(){
    const cartProducts = productOperations.getProductsInCart();
            const basket = document.querySelector('#Basket');
            const totalDiv = document.querySelector('#cart-total');
            const payButton = document.querySelector('#rzp-button1');
            
            basket.innerHTML = '';
            
            if (cartProducts.length === 0) {
                basket.innerHTML = '<div class="empty-basket">Your cart is empty</div>';
                totalDiv.style.display = 'none';
                payButton.style.display = 'none';
                return;
            }
            
            // Show total and pay button
            totalDiv.style.display = 'block';
            payButton.style.display = 'block';
            
            for (let product of cartProducts) {
                const basketItem = document.createElement('div');
                basketItem.className = 'basket-item';
                
                const productInfo = document.createElement('span');
                productInfo.innerText = `${product.name} ₹${product.price}`;
                
                const deleteButton = document.createElement('button');
                deleteButton.className = 'delete-btn';
                deleteButton.innerHTML = '×';
                deleteButton.setAttribute('product-id', product.id);
                deleteButton.addEventListener('click', deleteFromCart);
                deleteButton.title = 'Remove from cart';
                
                basketItem.appendChild(productInfo);
                basketItem.appendChild(deleteButton);
                basket.appendChild(basketItem);
            }
            
            // Update total
            const total = calculateCartTotal();
            totalDiv.innerText = `Total: ₹${total.toFixed(2)}`;
}



function preparePizzaCard(pizza){
    const outputDiv = document.querySelector('#output');
            const colDiv = document.createElement('div');
            colDiv.className = 'col-xl-4 col-lg-6 col-md-12 mb-4';
            
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card pizza-card';
            cardDiv.style = 'width: 100%';
            colDiv.appendChild(cardDiv);
            
            const img = document.createElement('img');
            img.src = pizza.url;
            img.className = 'card-img-top';
            img.alt = pizza.name;
            // Handle image load errors
            img.onerror = function() {
                this.src = 'https://via.placeholder.com/300x220/ff6b6b/ffffff?text=Pizza';
            };
            cardDiv.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            cardDiv.appendChild(cardBody);
            
            const h5 = document.createElement('h5');
            h5.className = 'card-title';
            h5.innerText = pizza.name;
            
            const p = document.createElement('p');
            p.className = 'card-text';
            p.innerText = pizza.menu_description;
            
            const priceDiv = document.createElement('div');
            priceDiv.className = 'h5 text-success mb-3';
            priceDiv.innerText = `₹${pizza.price}`;
            
            const button = document.createElement('button');
            button.setAttribute('product-id', pizza.id);
            button.addEventListener('click', addToCart);
            button.className = 'btn btn-primary w-100';
            button.innerText = 'Add to Cart';
            
            cardBody.appendChild(h5);
            cardBody.appendChild(p);
            cardBody.appendChild(priceDiv);
            cardBody.appendChild(button);
            outputDiv.appendChild(colDiv);
}
