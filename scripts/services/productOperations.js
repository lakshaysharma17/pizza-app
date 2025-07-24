// Doing CRUD Operations on products
import Product from "../../models/product.js";
import makeNetworkCall from "./api-client.js";

const productOperations = {
    products:[], // key:value
    async loadProducts(){
        const pizzas = await makeNetworkCall();
        const pizzaArray = pizzas['Vegetarian'];
        const productsArray = pizzaArray.map(pizza=>{
            const currentPizza = new Product(pizza.id, pizza.name, pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url);
            
            return currentPizza;
        })
        console.log('Product Array', productsArray);
        this.products = productsArray;
        return productsArray;
    },

    getProductsInCart(){
        const productInBasket = this.products.filter(product=>product.isAddedInCart);
        return productInBasket;
    },
    searchProducts(pizzaId){
        const product = this.products.find(currentProduct=>currentProduct.id==pizzaId);
        console.log('Product Found', product);
        product.isAddedInCart = true;
        console.log('Array', this.product);

    },
    // NEW: Remove from cart function
            removeFromCart(pizzaId) {
                const product = this.products.find(currentProduct => currentProduct.id == pizzaId);
                if (product) {
                    product.isAddedInCart = false;
                    // Re-enable the add to cart button
                    const addButton = document.querySelector(`button[product-id="${pizzaId}"]`);
                    if (addButton) {
                        addButton.innerText = 'Add to Cart';
                        addButton.disabled = false;
                    }
                }
            }
            

}
export default productOperations;