const mongoose = require("mongoose");

const guestDetailsSchema = mongoose.Schema({
	title: {
		type: String,
		enum: ["Mr", "Mrs", "Ms"],
		default: "Mr",
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	middleName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	nativeCountry: {
		type: String,
		required: true,
	},
	contactNumber: {
		type: Number,
		required: true,
	},
	emailId: {
		type: String,
		unique: true,
		trim: true,
		required: true,
	},
	dob: {
		type: String,
		required: true,
	},
	passportNumber: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("GuestDetails", guestDetailsSchema);
