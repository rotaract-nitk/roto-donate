const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { stringify } = require('nodemon/lib/utils');

const donorSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Donor Name is missing']
    },
    email: {
        type: String,
        unique: [true, 'email already exists'],
    },
    details: [{
        amount: {
            type: Number,
            required: [true, 'Amount donated is missing']
        },
        org: {
            type: String,
            required: [true, 'Organisation Name is missing']
        },
        time: {
            type: Date,
            default: Date.now
        }
    }]

});

module.exports = mongoose.model('Donor', donorSchema);
