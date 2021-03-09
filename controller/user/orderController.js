const Orders = require("../../model/order");
const moment = require('moment')
module.exports = {
	orders: (req, res) => {
		const { phone, address } = req.body;
		if (!phone || !address) {
			// return res.status(422).json({ message : 'All fields are required' });
			req.flash("error", "all field are req.");
			return res.redirect("/");
		}
		const order = new Orders({
			customerId: req.user._id,
			items: req.session.cart.items,
			phone,
			address,
		});
		order.save().then(result =>{
			req.flash("success", "order placed success");
			delete req.session.cart
			return res.redirect("customer/orders");
		})
	},
	custOrders: async (req, res) => {
		const orders = await Orders.find({ customerId: req.user._id },
			null,
			{ sort: { 'createdAt': -1 } } )
			res.header('Cache-Control', 'no-store')
		res.render('customer/order',{orders:orders,moment: moment})
	},
	orderById: (req, res) => {
		res.send("customer order by id");
	},
};
