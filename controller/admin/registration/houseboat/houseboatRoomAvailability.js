const RoomAvailability = require("../../../../model/admin/registration/houseBoat/houseboatActions/houseboatRoomAvailabilityModel");

//Create
const createRoomAvailability = async (req, res, next) => {
  try {
    const roomData = req.body;
    const createRoomAv = await RoomAvailability.create(roomData);

    if (createRoomAv) {
      res.status(201).json({
        error: false,
        message: "Houseboat RoomAvailability Created!",
        response: createRoomAv,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Houseboat RoomAvailability Not Created!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//Get by ID
const getRoomAvailabilityByID = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const getAv = await RoomAvailability.findById(_id).exec();

    if (getAv) {
      res.status(201).json({
        error: false,
        message: " Houseboat RoomAvailability Fetched!",
        response: getAv,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Houseboat RoomAvailability Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//Update
const updateRoomAvailability = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const roomData = req.body;

    if (roomData) {
      res.status(201).json({
        error: false,
        message: "Houseboat RoomAvailability updated!",
        response: roomData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Houseboat RoomAvailability not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//Delete
const deleteRoomAvailability = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const delAv = await RoomAvailability.findByIdAndDelete(_id);

    if (delAv) {
      res.status(201).json({
        error: false,
        message: " Houseboat RoomAvailability deleted",
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Houseboat RoomAvailability not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = {
  createRoomAvailability,
  getRoomAvailabilityByID,
  updateRoomAvailability,
  deleteRoomAvailability,
};
