const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id_order: string,
    id_product: string,
    date: datetime,
    product_quantity: int,
    sub_price: Float,
    total_price: Float
});

const UserModel = mongoose.model('cart_list', UserSchema);

module.exports = UserModel;