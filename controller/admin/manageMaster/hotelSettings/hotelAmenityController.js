const HotelAmenity = require("../../../../model/admin/manageMaster/hotelSettings/hotelAmenityModel");

//Create a new Amenity
const createNewHotelAmenity = async (req, res, next) => {
  try {
    const { amenityName, amenityIcon } = req.body;

    const hotelAmenityData = await HotelAmenity.create({
      amenityName,
      amenityIcon,
    });

    if (hotelAmenityData) {
      res.status(201).json({
        error: false,
        message: "Hotel Amenity created!",
        response: hotelAmenityData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Hotel Amenity not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Amenities
const getAllHotelAmenity = async (req, res, next) => {
  try {
    const allHotelAmenity = await HotelAmenity.find();

    if (allHotelAmenity) {
      res.status(201).json({
        error: false,
        message: "All Hotel Amenity fetched successfully",
        response: allHotelAmenity,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Hotel Amenity not found.",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single HotelAmenity
const getSingleHotelAmenity = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleHotelAmenity = await HotelAmenity.findById(_id).exec();

    if (singleHotelAmenity) {
      res.status(201).json({
        error: false,
        message: "Single HotelAmenity Fetched!",
        response: singleHotelAmenity,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single HotelAmenity Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Update an Amenity
const updateHotelAmenity = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const { amenityName, amenityIcon } = req.body;

    const finalHotelAmenity = await HotelAmenity.findById(_id).exec();

    finalHotelAmenity.amenityName = amenityName;
    finalHotelAmenity.amenityIcon = amenityIcon;

    const updatedHotelAmenity = await finalHotelAmenity.save();

    if (updatedHotelAmenity) {
      res.status(201).json({
        error: false,
        message: "Hotel Amenity updated",
        response: updatedHotelAmenity,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Hotel Amenity not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete an Amenity
const deleteHotelAmenity = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteAmenity = await HotelAmenity.findByIdAndDelete(_id);

    if (deleteAmenity) {
      res.status(201).json({
        error: false,
        message: "Hotel Amenity Deleted!",
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
  createNewHotelAmenity,
  getAllHotelAmenity,
  updateHotelAmenity,
  deleteHotelAmenity,
  getSingleHotelAmenity,
};
