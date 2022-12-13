const hotelAvailabilityModel = require("../../../../../model/admin/registration/hotel/hotelActions/hotelAvailabilityModel");
const blockCheckinCheckoutsModel = require("../../../../../model/admin/registration/hotel/hotelActions/blockCheckinCheckouts");
const stopSaleModel = require("../../../../../model/admin/registration/hotel/hotelActions/stopSale");

const isvalidRequest = function (requestBody) {
  return Object.keys(requestBody).length > 0;
};

const isValidObjectId = function (id) {
  var ObjectId = mongoose.Types.ObjectId;
  return ObjectId.isValid(id);
};

const createHotelAvailability = async (req, res, next) => {
  try {
    const data = req.body; //contains hotelId
    // const hotelId=req.params.id
    //const isHotelExist=
    if (!isvalidRequest(data)) {
      return res
        .status(400)
        .json({ status: true, message: "Request Body Empty." });
    }

    if (!isValidObjectId(data.hotelId)) {
      return res.status(400).send({
        error: true,
        message: `hotelId in body: <${data.hotelId}> NOT a Valid Mongoose Object ID.`,
      });
    }

    const availabilitySaved = await hotelAvailabilityModel.create(data);
    return res.status(201).json({
      error: false,
      message: "data saved successfully",
      data: availabilitySaved,
    });
  } catch (err) {
    next(err);
  }
};

const updateHotelAvailability = async (req, res, next) => {
  try {
    const data = req.body;
    const availabilityId = req.params.availabilityId;
    //const isHotelExist=
    if (!isvalidRequest(data)) {
      return res
        .status(400)
        .json({ error: true, message: "Request Body Empty." });
    }

    if (!isValidObjectId(data.hotelId)) {
      return res.status(400).send({
        error: true,
        message: `hotelId in body: <${data.hotelId}> NOT a Valid Mongoose Object ID.`,
      });
    }

    const availabilityUpdated = await hotelAvailabilityModel.findOneAndUpdate(
      { _id: availabilityId },
      data,
      { new: true }
    );
    return res.status(201).json({
      error: false,
      message: "data updated successfully",
      data: availabilityUpdated,
    });
  } catch (err) {
    next(err);
  }
};

const deletedHotelAvailability = async (req, res, next) => {
  try {
    const availabilityId = req.params.availabilityId;

    const deltedAvailability = await minimumLengthStayModel.deleteOne({
      _id: availabilityId,
    });

    return res.status(200).json({
      error: false,
      message: "hotel Availability deleted",
    });
  } catch (err) {
    next(err);
  }
};

const setStatusLiveAvailability = async (req, res, next) => {
  try {
     const availabilityId = req.params.availabilityId;
    const availability = await contractModel.findOneAndUpdate(
      { _id: availabilityId },
      { status: "live" },
      { new: true }
    );
    if (availability) {
      return res.status(200).json({
        error: false,
        message: " status set live",
        data: blockData,
      });
    } else {
      return res.status(404).json({
        error: true,
        message: "no such data exist to update",
      });
    }
  } catch (error) {
    next(error);
  }
};

//====================================

const createBlockChekinCheckouts = async (req, res, next) => {
  try {
    const data = req.body; //contains hotelId
    // const hotelId=req.params.id
    //const isHotelExist=
    if (!isvalidRequest(data)) {
      return res
        .status(400)
        .json({ error: true, message: "Request Body Empty." });
    }

    if (!isValidObjectId(data.hotelId)) {
      return res.status(400).send({
        error: true,
        message: `hotelId in body: <${data.hotelId}> NOT a Valid Mongoose Object ID.`,
      });
    }

    const blockSaved = await blockCheckinCheckoutsModel.create(data);
    return res.status(201).json({
      error: false,
      message: "data saved successfully",
      data: blockSaved,
    });
  } catch (err) {
    next(err);
  }
};

const updateBlockChekinCheckouts = async (req, res, next) => {
  try {
    const data = req.body; //contains hotelId
    const blockId = req.params.blockId;
    //const isHotelExist=
    if (!isvalidRequest(data)) {
      return res
        .status(400)
        .json({ error: true, message: "Request Body Empty." });
    }

    if (!isValidObjectId(data.hotelId)) {
      return res.status(400).send({
        error: true,
        message: `hotelId in body: <${data.hotelId}> NOT a Valid Mongoose Object ID.`,
      });
    }

    const blockSaved = await blockCheckinCheckoutsModel.findOneAndUpdate(
      { _id: blockId },
      data,
      { new: true }
    );

    return res.status(200).json({
      error: false,
      message: "data updated successfully",
      data: blockSaved,
    });
  } catch (err) {
    next(err);
  }
};

const deleteblockChekinCheckouts = async (req, res, next) => {
  try {
    const blockId = req.params.blockId;

    const deltedAvailability = await blockCheckinCheckoutsModel.deleteOne({
      _id: blockId,
    });

    return res.status(200).json({
      error: false,
      message: "deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

const setStatusLiveBlock = async (req, res, next) => {
  try {
    const blockId = req.params.blockId;
    const blockData = await contractModel.findOneAndUpdate(
      { _id: blockId },
      { status: "live" },
      { new: true }
    );
    if (blockData) {
      return res.status(200).json({
        error: false,
        message: " status set live",
        data: blockData,
      });
    } else {
      return res.status(404).json({
        error: true,
        message: "no such data exist to update",
      });
    }
  } catch (error) {
    next(error);
  }
};

//=========================================stop sale=========================================================

const createStopSale = async (req, res, next) => {
  try {
    const data = req.body; //contains hotelId
    // const hotelId=req.params.id
    //const isHotelExist=
    if (!isvalidRequest(data)) {
      return res
        .status(400)
        .json({ error: true, message: "Request Body Empty." });
    }

    if (!isValidObjectId(data.hotelId)) {
      return res.status(400).send({
        error: true,
        message: `hotelId in body: <${data.hotelId}> NOT a Valid Mongoose Object ID.`,
      });
    }

    const savedStopSale = await stopSaleModel.create(data);
    return res.status(201).json({
      error: false,
      message: "data saved successfully",
      data: savedStopSale,
    });
  } catch (err) {
    next(err);
  }
};

const updateStopSale = async (req, res, next) => {
  try {
    const data = req.body; //contains hotelId
    const stopSaleId = req.params.stopSaleId;
    //const isHotelExist=
    if (!isvalidRequest(data)) {
      return res
        .status(400)
        .json({ error: true, message: "Request Body Empty." });
    }

    if (!isValidObjectId(data.hotelId)) {
      return res.status(400).send({
        error: true,
        message: `hotelId in body: <${data.hotelId}> NOT a Valid Mongoose Object ID.`,
      });
    }

    const updatedStopSale = await stopSaleModel.findOneAndUpdate(
      { _id: stopSaleId },
      data,
      {
        new: true,
      }
    );

    return res.status(200).json({
      error: false,
      message: "data updated successfully",
      data: updatedStopSale,
    });
  } catch (err) {
    next(err);
  }
};

const deleteStopSale = async (req, res, next) => {
  try {
    const stopSaleId = req.params.stopSaleId;

    const deleteStopSale = await stopSaleModel.deleteOne({
      _id: stopSaleId,
    });

    return res.status(200).json({
      error: false,
      message: "deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

const setStatusLiveStopSale = async (req, res, next) => {
  try {
    const stopSaleId = req.params.stopSaleId;
    const stopSale = await contractModel.findOneAndUpdate(
      { _id: stopSaleId },
      { status: "live" },
      { new: true }
    );
    if (stopSale) {
      return res.status(200).json({
        error: false,
        message: " status set live",
        data: stopSale,
      });
    } else {
      return res.status(404).json({
        error: true,
        message: "no such data exist to update",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createHotelAvailability,
  updateHotelAvailability,
  deletedHotelAvailability,
  setStatusLiveAvailability,

  createBlockChekinCheckouts,
  updateBlockChekinCheckouts,
  deleteblockChekinCheckouts,
  setStatusLiveBlock,

  createStopSale,
  updateStopSale,
  deleteStopSale,
  setStatusLiveStopSale,
};
