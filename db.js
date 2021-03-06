const mongoose = require("mongoose");
require("dotenv/config");
mongoose.connect(process.env.DB_CONNECTION, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});
const connection = mongoose.connection;
connection
	.once("open", () => {
		console.log("Database connected...");
	})
	.catch((err) => {
		console.log("Connection failed...");
	});
