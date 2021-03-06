const Orders = require("../../model/order");
module.exports = {
	orders: (req, res) => {
		res.render("customer/order");
	},
	custOrders: (req, res) => {
		res.send("customer order");
	},
	orderById: (req, res) => {
		res.send("customer order by id");
	},
};
