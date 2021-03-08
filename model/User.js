const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		role: { type: String, default: "customer" },
	},
	{ timestamps: true },
);

module.exports =
    mongoose.models.User || mongoose.model('User', userSchema)