class Product {
    constructor(itemid, rating, price, discountedPrice, sizes, category, tags) {
      this.itemid = itemid;
      this.rating = rating;
      this.price = price;
      this.discountedPrice = discountedPrice;
      this.sizes = sizes;
      this.category = category;
      this.tags = tags;
    }

  }
  
  const productList = [
    new Product(1, 'Shirt', 10.99, 'Clothing', ['Shirt', 'Casual']),
    new Product(2, 'Pants', 24.99, 'Clothing', ['Pants', 'Casual']),
    new Product(3, 'Headphones', 49.99, 'Electronics', ['Headphones', 'Wireless']),
    new Product(4, 'Smartwatch', 129.99, 'Electronics', ['Smartwatch', 'Fitness']),
    new Product(5, 'Sneakers', 79.99, 'Footwear', ['Sneakers', 'Running']),
    new Product(6, 'Sandals', 29.99, 'Footwear', ['Sandals', 'Beach']),
    new Product(7, 'Backpack', 39.99, 'Accessories', ['Backpack', 'Travel']),
    new Product(8, 'Sunglasses', 19.99, 'Accessories', ['Sunglasses', 'Fashion']),
  ];

  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(itemid) {
      this.items = this.items.filter(item => item.itemid !== itemid);
    }

    getItem(itemid) {
        return this.items.find(item => item.itemid === itemid);
    }

    getCount() {
        this.items.length;
    }
  }

function addToCart(productId){
    //localStorage.getItem
    console.log("Starting to add item to cart " + productId);
    console.log("Starting to add item to cart " + productList.find((Product) => Product.itemid === productId).itemid);
    let cart = new ShoppingCart().addItem(productList.find(product => product.itemid === productId));
    console.log (cart);
    localStorage.setItem("cart", cart+" ");
}
  
 document.getElementById('addToCart').addEventListener('click', function(e) {
    e.preventDefault();
    addToCart(this.getAttribute('data-productId'));
 });

  console.log("End of Product JS");