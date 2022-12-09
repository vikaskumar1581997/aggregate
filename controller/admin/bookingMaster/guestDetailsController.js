const GuestDetails = require("../../../model/admin/bookingMaster/guestDetailsModel");

//Create a new Guest
const createNewGuest = async (req, res, next) => {
	try {
		const {
			title,
			firstName,
			middleName,
			lastName,
			nativeCountry,
			contactNumber,
			emailId,
			dob,
			passportNumber,
		} = req.body;

		let guest = await GuestDetails.find({
			contactNumber,
		});
		if (guest.length > 0) {
			res.status(200).json({
				error: false,
				message: "Guest with this contactNumber already exist",
				response: shop,
			});
		} else {
			const guestData = await GuestDetails.create({
				title,
				firstName,
				middleName,
				lastName,
				nativeCountry,
				contactNumber,
				emailId,
				dob,
				passportNumber,
			});
			res.status(200).json({
				error: false,
				message: "Guest Details Saved Successfully",
				Response: guestData,
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

//Get all Amenities
const getGuestDetailsList = async (req, res, next) => {
	try {
		const guestData = await GuestDetails.find();

		if (guestData) {
			res.status(201).json({
				error: false,
				message: "All Guest Details List fetched successfully",
				response: guestData,
			});
		} else {
			res.status(400).json({
				error: true,
				message: "No data Present.",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

//Get Single HotelAmenity
const getGuestDetailsById = async (req, res, next) => {
	try {
		const guestId = req.params.guestId;
		const guestData = await GuestDetails.findById(guestId).exec();

		if (guestData) {
			res.status(201).json({
				error: false,
				message: "Guest Details Fetched Successfully!",
				response: guestData,
			});
		} else {
			res.status(400).json({
				error: true,
				message: "Guest Details Does Not Exist!",
			});
		}
	} catch (error) {
		next(error);
	}
};

//Update an Amenity

const updateGuestDetails = async (req, res, next) => {
	try {
		const guestId = req.params.guestId;
		const guestData = req.body;
		console.log(guestId);
		if (!guestData) {
			res.status(400).json({ message: "data missing" });
		}
		const updateGuest = await GuestDetails.findOneAndUpdate(
			{
				_id: guestId,
			},
			guestData,
			{ new: true }
		);
		if (!updateGuest) {
			return res.status(400).json({
				status: "true",
				message: "guest not found",
			});
		}
		return res.status(200).json({
			status: true,
			msg: "Guest updated successfully",
			data: updateGuest,
		});
	} catch (error) {
		next(error);
	}
};


//Delete an Amenity
const deleteGuestDetails = async (req, res, next) => {
	try {
		const guestId = req.params.guestId;
		const deleteGuest = await GuestDetails.findByIdAndDelete(guestId);
		if (deleteGuest) {
			res.status(201).json({
				error: false,
				message: "Guest Details Deleted!",
			});
		} else {
			res.status(400).json({
				error: true,
				message: "Guest Details not found!",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

module.exports = {
	createNewGuest,
	getGuestDetailsList,
	updateGuestDetails,
	deleteGuestDetails,
	getGuestDetailsById,
};
