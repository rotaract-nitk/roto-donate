const teamSchema = require('../models/template');


module.exports.index = async (req, res) => {
    // const teams = await teamSchema.find({});
    // res.render('team', { teams });
    res.render('home');
}


