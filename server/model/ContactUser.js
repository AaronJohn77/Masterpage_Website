const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact_number: Double,
    Address: String
});

const UserModel = mongoose.model('customer_contact_list', ContactSchema);

module.exports = UserModel;