const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    ticket_id: double,
    ticket_type: string,
    ticket_date: datetime,
    ticket_message: string

});

const TicketModel = mongoose.model('feedback', TicketSchema);

module.exports = TicketModel;


