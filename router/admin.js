const express = require("express");
const router = express.Router();

const guest = require("../middleware/guest")
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")

const adminOrder = require("../controller/admin/orderController");
router.get("/orders", adminOrder.Orders);
router.post("/order/status", adminOrder.OrderStatus);

module.exports = router;
