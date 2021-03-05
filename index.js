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


app.get('/',(req,res)=>{
    res.render('home')
})



app.listen(PORT,()=>{
    console.log("Server started")
})