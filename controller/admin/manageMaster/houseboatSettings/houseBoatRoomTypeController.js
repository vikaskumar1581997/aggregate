const HouseBoatRoomType = require("../../../../model/admin/manageMaster/houseBoatSettings/houseBoatRoomTypeModel");

//Create a new HouseBoatRoomType
const createNewHBRT = async (req, res, next) => {
  try {
    const { roomTypeName, roomTypeCode } = req.body;

    const newHBRT = await HouseBoatRoomType.create({
      roomTypeName,
      roomTypeCode,
    });

    if (newHBRT) {
      res.status(201).json({
        error: false,
        message: "New HouseBoatRoomType created",
        response: newHBRT,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "New HouseBoatRoomType not created",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all HouseBoatRoomType
const getAllHBRT = async (req, res, next) => {
  const allHBRT = await HouseBoatRoomType.find().exec();
  if (allHBRT) {
    res.status(201).json({
      error: false,
      message: " HouseBoatRoomType fetched",
      response: allHBRT,
    });
  } else {
    res.status(400).json({
      error: true,
      message: " HouseBoatRoomType not fetched",
    });
  }
  try {
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single HouseBoatRoomType
const getSingleHouseBoatRoomType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleHouseBoatRoomType = await HouseBoatRoomType.findById(
      _id
    ).exec();

    if (singleHouseBoatRoomType) {
      res.status(201).json({
        error: false,
        message: "Single HouseBoatRoomType Fetched!",
        response: singleHouseBoatRoomType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single HouseBoatRoomType Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Update a  HouseBoatRoomType
const updateHBRT = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const { roomTypeName, roomTypeCode } = req.body;

    const finalHBRT = await HouseBoatRoomType.findById({ _id });

    finalHBRT.roomTypeName = roomTypeName;
    finalHBRT.roomTypeCode = roomTypeCode;

    const updatedHBRT = await finalHBRT.save();

    if (updatedHBRT) {
      res.status(201).json({
        error: false,
        message: " HouseBoatRoomType updated",
        response: updatedHBRT,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " HouseBoatRoomType not updated",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a  HouseBoatRoomType
const deleteHBRT = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const delHBRT = await HouseBoatRoomType.findByIdAndDelete({ _id });

    if (delHBRT) {
      res.status(201).json({
        error: false,
        message: " HouseBoatRoomType deleted",
        response: delHBRT,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " HouseBoatRoomType not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = {
  createNewHBRT,
  getAllHBRT,
  updateHBRT,
  deleteHBRT,
  getSingleHouseBoatRoomType,
};
