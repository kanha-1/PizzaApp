const express = require("express");
const router = express.Router();
const adminOrder = require("../controller/admin/orderController");
const guest = require("../middleware/guest")
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")

router.get("/orders", admin,adminOrder.Orders);
router.post("/order/status", admin,adminOrder.OrderStatus);

module.exports = router;
