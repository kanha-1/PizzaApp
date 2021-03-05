const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
require('dotenv').config()
require("./db")


// set Template engine
app.use(expressLayout)
app.use(express.static('./public'));
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')


// import Routes
const adminRoute = require('./router/admin')
const userRoute = require('./router/user')
const authRoute = require('./router/auth')

// use middleware
app.use("/user",userRoute)
app.use('/admin',adminRoute)
app.use('/auth',authRoute)


app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/cart',(req,res)=>{
    res.render('customer/cart')
})
app.get('/order',(req,res)=>{
    res.render('customer/order')
})
app.get('/login',(req,res)=>{
    res.render('auth/login')
})
app.get('/register',(req,res)=>{
    res.render('auth/register')
})
app.get('/logout',(req,res)=>{
    res.send('Page on process')
})



app.listen(PORT,()=>{
    console.log("Server started")
})