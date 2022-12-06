const Bank = require("../../../../model/admin/manageMaster/basicSettings/bankModel");

//Create a new Bank

const createNewBank = async (req, res, next) => {
	try {
		const { bank } = req.body;
		const bankData = await Bank.create({
			bank,
		});
		if (bankData) {
			res.status(201).json({
				error: false,
				message: "Bank created successfully!",
				response: bankData,
			});
		} else {
			res.status(400).json({
				error: true,
				message: "Bank not created!",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

//Get all Banks
const getAllBanks = async (req, res, next) => {
	try {
		const allBank = await Bank.find().lean();
		if (allBank) {
			res.status(201).json({
				error: false,
				message: "All currencies fetched successfully!",
				response: allBank,
			});
		} else {
			res.status(400).json({
				error: true,
				message: "Bank not found!",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

//Get Single Bank
const getSingleBank = async (req, res, next) => {
	try {
		const { id: _id } = req.params;
		const singleBank = await Bank.findById(_id).exec();

		if (singleBank) {
			res.status(201).json({
				error: false,
				message: "Single Bank Fetched!",
				response: singleBank,
			});
		} else {
			res.status(400).json({
				error: true,
				message: "Single Bank Not Fetched!",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

//Update a bank
const updateBank = async (req, res, next) => {
	try {
		const { id: _id } = req.params;
		const { bank } = req.body;
		const finalBank = await Bank.findById(_id).exec();

		finalBank.bank = bank;

		const updatedBank = await finalBank.save();
		if (updatedBank) {
			res.status(201).json({
				error: false,
				message: "Bank updated!",
				response: updatedBank,
			});
		} else {
			res.status(400).json({
				error: true,
				message: "Bank not updated!",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

//Delete a Bank
const deleteBank = async (req, res, next) => {
	try {
		const { id: _id } = req.params;
		const deleteBank = await Bank.findByIdAndDelete(_id);
		if (deleteBank) {
			res.status(201).json({
				error: false,
				message: "Bank deleted!",
			});
		} else {
			res.status(400).json({
				error: true,
				message: "Bank With This Id Not found!",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

module.exports = {
	createNewBank,
	getAllBanks,
	updateBank,
	deleteBank,
	getSingleBank,
};
