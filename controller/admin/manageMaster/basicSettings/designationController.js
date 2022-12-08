const Designation = require("../../../../model/admin/manageMaster/basicSettings/designationModel");

//Create a new Designation
const createNewDesignation = async (req, res, next) => {
	try {
		const { designation } = req.body;
		const designationData = await Designation.create({
			designation: designation,
		});
		if (designationData) {
			res.status(201).json({
				error: false,
				message: "Designation created successfully!",
				response: designationData,
			});
		} else {
			res.status(400).json({
				error: true,
				message: "Designation not created!",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

//Get all Designations
const getAllDesignations = async (req, res, next) => {
	try {
		const allDesignation = await Designation.find().lean();
		// res.json(allDesignation);
		if (allDesignation) {
			res.status(201).json({
				error: false,
				message: "All designations fetched successfully!",
				response: allDesignation,
			});
		} else {
			res.status(400).json({
				error: true,
				message: "Designation not found!",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

//Get Single Designation
const getSingleDesignation = async (req, res, next) => {
	try {
		const { designationId: _id } = req.params;
		const singleDesignation = await Designation.findById(_id).exec();

		if (singleDesignation) {
			res.status(201).json({
				error: false,
				message: "Single Designation Fetched!",
				response: singleDesignation,
			});
		} else {
			res.status(400).json({
				error: true,
				message: "Single Designation Not Fetched!",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

//Update a Designation
const updateDesignation = async (req, res, next) => {
	try {
		const { designationId: _id } = req.params;
		const { designation } = req.body;

		const finalDesignation = await Designation.findById(_id).exec();
		finalDesignation.designation = designation;

		const updatedDesignation = await finalDesignation.save();

		if (updatedDesignation) {
			res.status(201).json({
				error: false,
				message: "Designation updated!",
				response: updatedDesignation,
			});
		} else {
			res.status(400).json({
				error: true,
				message: "Designation not updated!",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

//Delete a Designation
const deleteDesignation = async (req, res, next) => {
	try {
		const { designationId: _id } = req.params;
		const deleteDesignation = await Designation.findByIdAndDelete(_id);
		if (deleteDesignation) {
			res.status(201).json({
				error: false,
				message: "Designation deleted!",
			});
		} else {
			res.status(400).json({
				error: true,
				message: "Deletion not completed!",
			});
		}
	} catch (error) {
		next(error);
		console.error(error);
	}
};

module.exports = {
	createNewDesignation,
	getAllDesignations,
	updateDesignation,
	deleteDesignation,
	getSingleDesignation,
};
