const RoomAmenity = require("../../../../model/admin/manageMaster/hotelSettings/roomAmenityModel");

//Create a new Amenity
const createNewRoomAmenity = async (req, res, next) => {
  try {
    const { amenityName, amenityIcon } = req.body;

    const roomAmenityData = await RoomAmenity.create({
      amenityName,
      amenityIcon,
    });

    if (roomAmenityData) {
      res.status(201).json({
        error: false,
        message: "Room Amenity created!",
        response: roomAmenityData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Room Amenity not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Amenities
const getAllRoomAmenity = async (req, res, next) => {
  try {
    const allRoomAmenity = await RoomAmenity.find();

    if (allRoomAmenity) {
      res.status(201).json({
        error: false,
        message: "All Room Amenity fetched successfully",
        response: allRoomAmenity,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Room Amenity not found.",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update an Amenity
const updateRoomAmenity = async (req, res, next) => {
  try {
    const { _id, amenityName, amenityIcon } = req.body;

    const finalRoomAmenity = await RoomAmenity.findById(_id).exec();

    finalRoomAmenity.amenityName = amenityName;
    finalRoomAmenity.amenityIcon = amenityIcon;

    const updatedRoomAmenity = await finalRoomAmenity.save();

    if (updatedRoomAmenity) {
      res.status(201).json({
        error: false,
        message: "Room Amenity updated",
        response: updatedRoomAmenity,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Room Amenity not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete an Amenity
const deleteRoomAmenity = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const deleteAmenity = await RoomAmenity.findByIdAndDelete(_id);

    if (deleteAmenity) {
      res.status(201).json({
        error: false,
        message: "Room Amenity Deleted!",
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
  createNewRoomAmenity,
  getAllRoomAmenity,
  updateRoomAmenity,
  deleteRoomAmenity,
};
