const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ExpressError = require('./utils/ExpressError');


// import routes
const teamRoutes = require('./routes/template');
const orgIndexRouter = require('./routes/orgIndexRoutes')
const app = express();

mongoose.connect('mongodb+srv://rotoWebnitk:rotoWeb18@cluster0.hzgk8.mongodb.net/rotoDonations?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/', teamRoutes);
app.use('/index', orgIndexRouter);

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
    res.render('home.ejs');
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
