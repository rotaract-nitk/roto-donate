const organisationSchema = require('../models/organisation');
const donorSchema = require('../models/donorSchema');

module.exports.index = async (req, res) => {
    const organisations = await organisationSchema.find({});
    const donors = donorSchema.aggregate([
        {
            $match: {}
        },
        {
            '$unwind': '$details'
        },
        {
            $project: {
                'name': '$name',
                'amount': '$details.amount',
                'org': '$details.org',
                'time': '$details.time',
                '_id': 0
            }
        }
    ]);
    const donors_top = await donors.append({
        $sort: {
            amount: -1
        }
    })
    const donors_recent = await donors.append({
        $sort: {
            date: -1
        }
    })
    res.render('home', { organisations, donors_top, donors_recent });
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

