const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ExpressError = require('./utils/ExpressError');

const orgIndex = [
    {
        title: 'Nanhi Kali',
        description: 'Nanhi Kali is an Indian non-governmental organization that supports education for underprivileged girls in India. Founded by Anand Mahindra in 1996.',
        imgUrl: 'https://www.rotary-ribi.org/upimages/PageMainPics/Nanhi%20Kali%20Image.jpg'
    },
    {
        title: 'The Smile Foundation',
        description: 'The purpose of the Smile Foundation for Education in India was to promote education among the underprivileged. Their development program includes Education, health and livelihood.',
        imgUrl: 'https://www.unitedwaymumbai.org/ngo_logos/142_logo.jpg'
    },
    {
        title: 'Helpage India',
        description: 'HelpAge India is an Indian organisation focused on the concerns of elders. Established in 1978, its mission is to “work for the cause and care of under-aged elderly people and improve their standard of living”.',
        imgUrl: 'https://globalprimenews.com/wp-content/uploads/2020/05/IMG_20200511_184505.png'
    },
    {
        title: 'CRY (Child Rights and You)',
        description: 'Recognized as India’s most trusted  NGO, Child Rights and You (CRY) works tirelessly to ensure happier and healthier childhoods for India’s underprivileged childrem.',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Child_Rights_and_You_%28CRY%29_Organization_logo.png/250px-Child_Rights_and_You_%28CRY%29_Organization_logo.png'
    },
    {
        title: 'Pratham',
        description: 'Pratham is one of the largest non-governmental organisations in India. Madhav Chavan and Farida Lambe founded it. It works towards the provision of quality education for underprivileged children in India.Established in Mumbai in 1994 to provide pre-school education to children in slums.',
        imgUrl: 'https://www.pratham.org/wp-content/uploads/2020/03/Capture.png'
    }
]


// import routes
const teamRoutes = require('./routes/template');
const app = express();

mongoose.connect('mongodb+srv://rotoWebnitk:rotoWeb18@cluster0.hzgk8.mongodb.net/rotoDonations?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/', teamRoutes);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('home.ejs',{orgIndex});
})
app.get('/orgs', (req, res) => {
    res.render('organizations/index.ejs');
})
// app.get('/index', (req, res) => {
//     res.render('organizations/indexOrgs.ejs');
// })



app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
    // res.send("404! Page Not Found!");
});

//error handling
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    // res.status(statusCode).send(message);
    if (!err.message) err.message = 'Something Went Wrong';
    res.status(statusCode).render('error', { err });
})

// driver 
app.listen(3000, () => {
    console.log('Serving On port 3000');
})
