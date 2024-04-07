const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact_number: Double,
    Address: String
});

const ContactModel = mongoose.model('customer_contact_list', ContactSchema);

module.exports = ContactModel;