const organisationSchema = require('../models/organisation');


module.exports.index = async (req, res) => {
    const organisations = await organisationSchema.find({});
    res.render('home', { organisations });
    //res.render('orgs');
}


module.exports.showOrganisation = async (req, res) => {
    const organisation = await organisationSchema.findById(req.params.id);
    // console.log("/id route", organisation);
    if (!organisation) {
        return res.redirect('/orgs');
    }
    res.render('organizations/index', { organisation });
}

module.exports.handleDonation = async (req, res, next) => {
    console.log(req.body);
    res.redirect(req.get('referer'))
}