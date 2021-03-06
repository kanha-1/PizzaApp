// const User = require("../model/user");
const bcrypt = require("bcryptjs");
const { hash, compare } = require("bcryptjs");
const _getRedirectUrl = (req) => {
	return req.user.role === "admin" ? "/admin/orders" : "/customer/orders";
};
module.exports = {
	register: (req, res) => {
		res.render("auth/register");
	},
	postRegister: async (req, res) => {
		User.findOne({ email: req.body.email }, (err, result) => {
			if (result) {
				res.send("Email already exists");
				// req.flash("error", "Email already exists");
				// req.flash("email", email);
				// return res.redirect("/register");
			}
		});
		// hash password
		const hashedPassword = await hash(req.body.password, 10);

		// Creating a new USER
		const user = new User({
			name: req.body.name,
			email: req.body.email,
			password: hashedPassword,
		});

		user
			.save()
			.then(() => {
				return res.redirect("/");
			})
			.catch((err) => {
				// req.flash("error", "Something went wrong");
				res.send("error");
				return res.redirect("/register");
			});
	},
	login: (req, res) => {
		res.render("auth/login");
	},
	postLogin: async (req, res, next) => {
		const { email, password } = req.body;
		// Validate request
		if (!email || !password) {
			// req.flash("error", "All fields are required");
			res.send("All fields are required");
			return res.redirect("/login");
		}
		const user = await User.findOne({ email: req.body.email });
		// if (!user) req.flash("No user with this email", info.message);
		if (!user) res.senf("No user with this email");
		await compare(req.body.password, user.password)
			.then((match) => {
				if (match) {
					return done(null, user, { message: "Logged in succesfully" });
				}
				return done(null, false, { message: "Wrong username or password" });
			})
			.catch((err) => {
				return done(null, false, { message: "Something went wrong" });
			});
	},

	logout: (req, res) => {
		req.logout();
		return res.redirect("/login");
	},
};
