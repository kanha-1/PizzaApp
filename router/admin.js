const express = require("express");
const router = express.Router();

const adminOrder = require("../controller/admin/orderController");
router.get("/orders", adminOrder.Orders);
router.post("/order/status", adminOrder.OrderStatus);

module.exports = router;
