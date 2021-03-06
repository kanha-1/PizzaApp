const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const mongoose = require("mongoose");
const ejs = require('ejs')
const path = require('path')
const session = require('express-session')
const flash = require('express-flash')
const expressLayout = require('express-ejs-layouts')
const MongoDBStore = require('connect-mongodb-session')(session)
require('dotenv').config()
require("./db")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session store
let mongoStore = new MongoDBStore({
    uri: process.env.DB_CONNECTION,
    collection: 'sessions'
})

// Session config
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hour
}))

app.use(flash())
// session global midddleware

app.use((req, res, next) => {
	res.locals.session = req.session;
	res.locals.user = req.user;
	next();
});
// set Template engine
app.use(expressLayout)
app.use(express.static('./public'));
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')


// import Routes
const adminRoute = require('./router/admin')
const userRoute = require('./router/user')
const authRoute = require('./router/auth')
const home = require('./router/Home')

// use middleware
app.use("/",userRoute)
app.use('/admin',adminRoute)
app.use('/',authRoute)
app.use('/',home)

// listening server

app.listen(PORT,()=>{
    console.log("Server started")
})