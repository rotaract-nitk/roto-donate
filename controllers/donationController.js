const https = require('https');
const checksum_lib = require('paytmCheckSum');
const catchAsync = require('./../utils/catchAsync')
const Organisation = require('./../models/organisation');

module.exports.handleDonation = catchAsync(async (req, res, next) => {
    if (!req.body.amount || !req.body.email || !req.body.phone) {
        res.status(400).send("Payment failed");
    } else {
        var params = {};
        params["MID"] = process.env.PAYTM_MID;
        params["WEBSITE"] = process.env.PAYTM_WEBSITE;
        params["CHANNEL_ID"] = "WEB";
        params["INDUSTRY_TYPE_ID"] = "Retail";
        params["ORDER_ID"] = "TEST_" + new Date().getTime();
        params["CUST_ID"] = "customer_001";
        params["TXN_AMOUNT"] = req.body.amount.toString();
        params["CALLBACK_URL"] = `https://roto-website.vercel.app/${req.body.id}/paymentResult`;

        const checksum = await checksum_lib.generateSignature(params, process.env.PAYTM_KEY)
        var txn_url = "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
        // var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production

        var form_fields = "";
        for (var x in params) {
            form_fields +=
                "<input type='hidden' name='" + x + "' value='" + params[x] + "' >";
        }
        form_fields +=
            "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "' >";

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(
            '<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' +
            txn_url +
            '" name="f1">' +
            form_fields +
            '</form><script type="text/javascript">document.f1.submit();</script></body></html>'
        );
        res.end();

    }
})

module.exports.donationResponse = async (req, res) => {
    console.log(req);
    if (req.body.STATUS == "TXN_SUCCESS") {
        {
            const currOrgnaisation = await Organisation.findById(req.params.id);
            currOrgnaisation.donationsCount++;
            currOrgnaisation.save();
            res.status(200).send("payment sucess");
        }
    } else {
        res.status(500).send("payment failed");
    }
}
