// Product JS contain the Structure of a Pizza Object
// Pizza Object  - id, name, Desc, Price, Rating, img

class Product{
    constructor(id, name, menu_description, price, url){
        this.id = id;
        this.name = name;
        this.menu_description = menu_description;
        this.price = price; 
        this.url = url;
        this.isAddedInCart = false;
    }
}

export default Product;