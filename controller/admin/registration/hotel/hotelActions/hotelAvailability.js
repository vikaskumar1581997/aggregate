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
        .json({ status: false, message: "Request Body Empty." });
    }

    if (!isValidObjectId(data.hotelId)) {
      return res.status(400).send({
        status: false,
        message: `hotelId in body: <${data.hotelId}> NOT a Valid Mongoose Object ID.`,
      });
    }

    const availabilitySaved = await hotelAvailabilityModel.create(data);
    return res.status(201).json({
      status: false,
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
        .json({ status: false, message: "Request Body Empty." });
    }

    if (!isValidObjectId(data.hotelId)) {
      return res.status(400).send({
        status: false,
        message: `hotelId in body: <${data.hotelId}> NOT a Valid Mongoose Object ID.`,
      });
    }

    const availabilityUpdated = await hotelAvailabilityModel.findOneAndUpdate(
      { _id: availabilityId },
      data,
      { new: true }
    );
    return res.status(201).json({
      status: false,
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

const createBlockChekinCheckouts = async (req, res, next) => {
  try {
    const data = req.body; //contains hotelId
    // const hotelId=req.params.id
    //const isHotelExist=
    if (!isvalidRequest(data)) {
      return res
        .status(400)
        .json({ status: false, message: "Request Body Empty." });
    }

    if (!isValidObjectId(data.hotelId)) {
      return res.status(400).send({
        status: false,
        message: `hotelId in body: <${data.hotelId}> NOT a Valid Mongoose Object ID.`,
      });
    }

    const blockSaved = await hotelAvailabilityModel.create(data);
    return res.status(201).json({
      status: false,
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
        .json({ status: false, message: "Request Body Empty." });
    }

    if (!isValidObjectId(data.hotelId)) {
      return res.status(400).send({
        status: false,
        message: `hotelId in body: <${data.hotelId}> NOT a Valid Mongoose Object ID.`,
      });
    }

    const blockSaved = await hotelAvailabilityModel.findOneAndUpdate(
      { _id: blockId },
      data,
      { new: true }
    );

    return res.status(200).json({
      status: false,
      message: "data updated successfully",
      data: blockSaved,
    });
  } catch (err) {
    next(err);
  }
};


const deleteblock = async (req, res, next) => {
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


module.exports = {
  createHotelAvailability,
  updateHotelAvailability,
  deletedHotelAvailability,
createBlockChekinCheckouts,
  updateBlockChekinCheckouts,
};
