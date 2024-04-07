const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    id_order: string,
    id_product: string,
    date: datetime,
    product_quantity: int,
    sub_price: Float,
    total_price: Float
});

const CartModel = mongoose.model('cart_list', CartSchema);

module.exports = CartModel;