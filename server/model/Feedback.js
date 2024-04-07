const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    ticket_id: double,
    ticket_type: string,
    ticket_date: datetime,
    ticket_message: string

});

const UserModel = mongoose.model('feedback', UserSchema);

module.exports = UserModel;


