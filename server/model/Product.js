const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_name: String,
    product_price: float,
    product_description: String,
    product_image: String,
    product_stock: String,
    product_quantity: Int,
    product_category: ENUM ("Men,Women,Kids"),
    product_subcategory: ENUM ("Jackets,Shirts,Jeans,Shoes,Accessories"),

    });
    
    const ProductModel = mongoose.model('products', ProductSchema);
    
    module.exports = ProductModel;

 
