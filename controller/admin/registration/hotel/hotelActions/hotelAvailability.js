const hotelAvailabilityModel = require("../../../../../model/admin/registration/hotel/hotelActions/hotelAvailabilityModel");

const isvalidRequest = function (requestBody) {
  return Object.keys(requestBody).length > 0;
};

const isValidObjectId = function (id) {
  var ObjectId = mongoose.Types.ObjectId;
  return ObjectId.isValid(id);
};

exports.hotelAvailability = async (req, res, next) => {
  try{
  const data = req.body;
  const hotelId=req.params.id
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
  return res
    .status(201)
    .json({
      status: false,
      message: "data saved successfully",
      data: availabilitySaved,
    });
}catch(err){
  next(err)
}
}