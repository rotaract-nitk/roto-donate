const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const imageSchema = new mongoose.Schema({
    url: String,
    alt: String
});

const organisationSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true,'Organisation must have a title']
    },
    mission : {
        type : String,
        required : [true,'Organisation card needs mission to show']
    },
    description : {
        type : String,
        required : [true,'Organisation needs description to show in it\'s page']
    },
    thumbnail : {
        type : String,
        required : [true,'Organisaton card must have a thumbnail']
    },
    images : [imageSchema]
})

module.exports = mongoose.model('Organisation',organisationSchema);