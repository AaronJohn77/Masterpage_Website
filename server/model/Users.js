const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
});

const UserModel = mongoose.model('user_login', UserSchema);

module.exports = UserModel;