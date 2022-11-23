const MarketType = require("../../../../model/admin/manageMaster/locationSettings/marketTypeModel");

//Create a new MarketType
const createNewMarketType = async (req, res, next) => {
  try {
    const { marketType } = req.body;
    const marketTypeData = await MarketType.create({ marketType });
    if (marketTypeData) {
      res.status(201).json({
        error: false,
        message: "MarketType created!",
        response: marketTypeData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "MarketType not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all MarketType
const getAllMarketType = async (req, res, next) => {
  try {
    const allMarketType = await MarketType.find().lean();
    // res.json(allMarketType);
    if (allMarketType) {
      res.status(201).json({
        error: false,
        message: "All marketTypes fetched successfully!",
        response: allMarketType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "MarketType not found!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single MarketType
const getSingleMarketType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleMarketType = await MarketType.findById(_id).exec();

    if (singleMarketType) {
      res.status(201).json({
        error: false,
        message: "Single MarketType Fetched!",
        response: singleMarketType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single MarketType Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Update a MarketType
const updateMarketType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const { marketType } = req.body;

    const finalMarketType = await MarketType.findById(_id).exec();
    finalMarketType.marketType = marketType;

    const updatedMarketType = await finalMarketType.save();

    if (updatedMarketType) {
      res.status(201).json({
        error: false,
        message: "MarketType updated!",
        response: updatedMarketType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "MarketType not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a MarketType
const deleteMarketType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const deleteMarketType = await MarketType.findByIdAndDelete(_id);
    if (deleteMarketType) {
      res.status(201).json({
        error: false,
        message: "MarketType deleted!",
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
  createNewMarketType,
  getAllMarketType,
  updateMarketType,
  deleteMarketType,
  getSingleMarketType,
};
