const HotelType = require("../../../../model/admin/manageMaster/hotelSettings/hotelTypeModel");

//Create a new Hotel Type
const createHotelType = async (req, res, next) => {
  try {
    const { hotelType } = req.body;

    const hotelTypeData = await HotelType.create({ hotelType });

    if (hotelTypeData) {
      res.status(201).json({
        error: false,
        message: "Hotel Type created!",
        response: hotelTypeData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Hotel Type not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Hotel Type
const getAllHotelType = async (req, res, next) => {
  try {
    const allHotelType = await HotelType.find();

    if (allHotelType) {
      res.status(201).json({
        error: false,
        message: "All Hotel Type fetched successfully",
        response: allHotelType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Hotel Type not found.",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single HotelType
const getSingleHotelType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleHotelType = await HotelType.findById(_id).exec();

    if (singleHotelType) {
      res.status(201).json({
        error: false,
        message: "Single HotelType Fetched!",
        response: singleHotelType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single HotelType Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update Hotel Type
const updateHotelType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const { hotelType } = req.body;

    const finalHotelType = await HotelType.findById(_id).exec();

    finalHotelType.hotelType = hotelType;
    const updatedHotelType = await finalHotelType.save();

    if (updatedHotelType) {
      res.status(201).json({
        error: false,
        message: "Hotel Type updated",
        response: updatedHotelType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Hotel type not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete Hotel Type
const deleteHotelType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteType = await HotelType.findByIdAndDelete(_id);

    if (deleteType) {
      res.status(201).json({
        error: false,
        message: "Hotel Type deleted!",
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
  createHotelType,
  getAllHotelType,
  updateHotelType,
  deleteHotelType,
  getSingleHotelType,
};
