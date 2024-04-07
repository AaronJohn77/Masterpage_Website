const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    product_name: String,
    product_price: float,
    product_description: String,
    product_image: String,
    product_stock: String,
    product_quantity: Int,
    product_category: ENUM ("Men,Women,Kids"),
    product_subcategory: ENUM ("Jackets,Shirts,Jeans,Shoes,Accessories"),

    });
    
    const UserModel = mongoose.model('products', UserSchema);
    
    module.exports = UserModel;

 
