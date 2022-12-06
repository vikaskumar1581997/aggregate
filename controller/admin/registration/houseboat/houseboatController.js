const HouseBoatModel = require("../../../../model/admin/registration/houseBoat/houseBoatModel");

//Create a HouseBoat
const createNewHouseBoat = async (req, res, next) => {
	try {
		const houseboatData = req.body;
		const houseboatCreate = await HouseBoatModel.create(houseboatData);

		if (houseboatCreate) {
			res.status(201).json({
				error: false,
				message: "Houseboat Created!",
				response: houseboatCreate,
			});
		} else {
			res.status(400).json({
				error: true,
				message: "Houseboat Not Created!",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

//Get all  HouseBoat
const getAllHouseBoat = async (req, res, next) => {
	try {
		const allHouseboat = await HouseBoatModel.find().exec();

		if (allHouseboat) {
			res.status(201).json({
				error: false,
				message: " Houseboat fetched",
				response: allHouseboat,
			});
		} else {
			res.status(400).json({
				error: true,
				message: " Houseboat not fetched",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

//Get a single HouseBoat
const getSingleHouseBoat = async (req, res, next) => {
	try {
		const { houseboatId: _id } = req.params;
		const singleHouseboat = await HouseBoatModel.findById(
			houseboatId
		).exec();

		if (singleHouseboat) {
			res.status(201).json({
				error: false,
				message: "Single Houseboat Fetched!",
				response: singleHouseboat,
			});
		} else {
			res.status(400).json({
				error: true,
				message: "Single Houseboat Not Fetched!",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

//Update a HouseBoat
const updateHouseBoat = async (req, res, next) => {
	try {
		const { houseboatId: _id } = req.params;
		const houseboatData = req.body;
		const upadatedHouseBoat = await HouseBoatModel.findOneAndUpdate(
			_id,
			houseboatData
		);

		if (upadatedHouseBoat) {
			res.status(201).json({
				error: false,
				message: "Houseboat updated!",
				response: upadatedHouseBoat,
			});
		} else {
			res.status(400).json({
				error: true,
				message: "Houseboat not updated!",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

//Delete a HouseBoat
const deleteHouseBoat = async (req, res, next) => {
	try {
		const { houseboatId: _id } = req.params;
		const deleteBoat = await HouseBoatModel.findByIdAndDelete(_id);

		if (deleteBoat) {
			res.status(201).json({
				error: false,
				message: " Houseboat deleted",
			});
		} else {
			res.status(400).json({
				error: true,
				message: " Houseboat not deleted",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

module.exports = {
	createNewHouseBoat,
	getAllHouseBoat,
	getSingleHouseBoat,
	updateHouseBoat,
	deleteHouseBoat,
};
