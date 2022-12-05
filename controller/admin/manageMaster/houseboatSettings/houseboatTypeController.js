const HouseBoatType = require("../../../../model/admin/manageMaster/houseBoatSettings/houseBoatTypeModel");

//Create a new HouseBoatType
const createNewHouseBoatType = async (req, res, next) => {
  try {
    const { boatName, boatCode } = req.body;

    const newHouseBoatType = await HouseBoatType.create({
      boatName,
      boatCode,
    });

    if (newHouseBoatType) {
      res.status(201).json({
        error: false,
        message: "New HouseBoatType created",
        response: newHouseBoatType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "New HouseBoatType not created",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all HouseBoat Types
const getAllHouseBoatType = async (req, res, next) => {
  try {
    const allHouseBoat = await HouseBoatType.find().exec();
    if (allHouseBoat) {
      res.status(201).json({
        error: false,
        message: " HouseBoat fetched",
        response: allHouseBoat,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " HouseBoat not fetched",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single HouseBoatType
const getSingleHouseBoatType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleHouseBoatType = await HouseBoatType.findById(_id).exec();

    if (singleHouseBoatType) {
      res.status(201).json({
        error: false,
        message: "Single HouseBoatType Fetched!",
        response: singleHouseBoatType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single HouseBoatType Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update a HouseBoatType
const updateHouseBoatType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const { boatName, boatCode } = req.body;

    const finalHBT = await HouseBoatType.findById({ _id });

    finalHBT.boatName = boatName;
    finalHBT.boatCode = boatCode;

    const updatedHBT = await finalHBT.save();

    if (updatedHBT) {
      res.status(201).json({
        error: false,
        message: " HouseBoatType updated",
        response: updatedHBT,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " HouseBoatType not updated",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a HouseBoatType
const deleteHouseBoatType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteHBT = await HouseBoatType.findByIdAndDelete({ _id });

    if (deleteHBT) {
      res.status(201).json({
        error: false,
        message: " HouseBoatType deleted",
        response: deleteHBT,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " HouseBoatType not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = {
  createNewHouseBoatType,
  getAllHouseBoatType,
  updateHouseBoatType,
  deleteHouseBoatType,
  getSingleHouseBoatType,
};
