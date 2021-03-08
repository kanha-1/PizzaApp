const express = require("express");
const router = express.Router();
const authController = require('../controller/authController')

const guest = require("../middleware/guest")
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")

router.get('/login',(req,res)=>{
    res.render('auth/login')
})
router.get('/login',guest,authController.login)         
router.post('/login',authController.postLogin)         
router.get('/register',guest,authController.register)
router.post('/register',authController.postRegister)
router.post('/logout',authController.logout)


module.exports = router;
