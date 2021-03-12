const express = require("express");
const router = express.Router();
const cartController = require('../controller/user/cartController')
const orderCotroller = require('../controller/user/orderController')
const auth = require("../middleware/auth")
// cart manage
router.get('/cart',cartController.allcart)
router.post('/update-cart',cartController.updateCart)

// orders manage

router.post('/orders',auth,orderCotroller.orders)
router.get('/customer/orders',auth,orderCotroller.custOrders)
router.get('/customer/orders/:id',auth,orderCotroller.orderById)

module.exports = router;
