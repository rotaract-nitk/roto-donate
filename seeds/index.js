const mongoose = require('mongoose');
const fs = require('fs');

const organisations = require('./organisations');
// db schema - table in Db
const organisationSchema = require('../models/organisation');
const Donor = require('./../models/donorSchema');
// List of members 
// const members = require('./coreTeam');

// connect to db
mongoose.connect('mongodb+srv://rotoWebnitk:rotoWeb18@cluster0.hzgk8.mongodb.net/rotoDonations?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const seedDB = async () => {

    // your db seeding logic here

    const donors = fs.readFileSync(`${__dirname}/donors.json`, {
        encoding: 'utf-8'
    });
    const donorObj = JSON.parse(donors);
    await Donor.deleteMany({});
    await Donor.insertMany(donorObj);
    // console.log(organisations);
    await organisationSchema.deleteMany({});
    for (let i = 0; i < organisations.length; i++) {
        const organisation = new organisationSchema({
            title: organisations[i].title,
            mission: organisations[i].mission,
            description: organisations[i].description,
            thumbnail: organisations[i].thumbnail,
            images: organisations[i].images,
            donationsCount: 0

        })
        await organisation.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
