const express = require("express");
const router = express.Router();
const authController = require('../controller/authController')

router.get('/login',(req,res)=>{
    res.render('auth/login')
})
router.post('/login',authController.login)
router.get('/register',authController.register)
router.post('/register',authController.postRegister)
router.post('/logout',authController.logout)


module.exports = router;
