const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact_number: Double,
    Address: String
});

const UserModel = mongoose.model('customer_contact_list', UserSchema);

module.exports = UserModel;