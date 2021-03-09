const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeCotroller");
const menu = require("../model/menu");

router.get("/", (req, res) => {
	res.render("home");
});
router.get("/Menu", homeController().index);
router.post("/add", (req, res) => {
	const pizza = new menu({
		name: req.body.name,
		image: req.body.image,
		price: req.body.price,
		size: req.body.size,
	});
	pizza.save().then((result) => {
		console.log(pizza);
	});
});

module.exports = router;
