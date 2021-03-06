const express = require("express");
const router = express.Router();
const cartController = require('../controller/user/cartController')
const orderCotroller = require('../controller/user/orderController')
// cart manage
router.get('/cart',cartController.allcart)
router.post('/update-cart',cartController.updateCart)

// orders manage
router.get('/orders',orderCotroller.orders)
router.get('/customer/orders',orderCotroller.custOrders)
router.get('/customer/orders/:id',orderCotroller.orderById)

module.exports = router;
