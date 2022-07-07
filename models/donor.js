const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { stringify } = require('nodemon/lib/utils');

const donor = new Schema({
    name: String,
    email:String,
    details : [{
        amt : Number,
        benf: String,
        Time: {
            type: Date,
            default: Date.now
        }
         }]

});

module.exports = mongoose.model('Donor', donor);
