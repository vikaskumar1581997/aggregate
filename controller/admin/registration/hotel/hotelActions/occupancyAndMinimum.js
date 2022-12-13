const occupancyModel = require("../../../../../model/admin/registration/hotel/hotelActions/occupancyModel");
const minimumLengthStayModel = require("../../../../../model/admin/registration/hotel/hotelActions/minimunLengthModel");

const createOccupancy = async (req, res, next) => {
  try {
    //const id = req.params.id;
    const data = req.body; //give hotelId in body

    const occupancyCreated = await occupancyModel.create(data);

    return res.status(201).json({
      error:false,
      message: "occupancy created",
      data: occupancyCreated,
    });
  } catch (err) {
    next(err);
  }
};

const deleteOccupancy = async (req, res, next) => {
  try {
    const occupancyId = req.params.occupancyId;
    const deletedOccupancy = await occupancyModel.deleteOne({
      _id: occupancyId,
    });

    //console.log(deletedOccupancy);
    return res.status(200).json({
      error:false,
      message: "occupancy deleted",
    });
  } catch (err) {
    next(err);
  }
};
const updateOccupancy = async (req, res, next) => {
  try {
    const occupancyId = req.params.occupancyId;
    const data = req.body;
    console.log(data);
    const updatedOccupancy = await occupancyModel.findOneAndUpdate(
      { _id: occupancyId },
      data,
      { new: true }
    );
    //console.log(updatedOccupancy);
    if (updatedOccupancy) {
      return res.status(200).json({
        error:false,
        message: "occupancy updated",
        data: updatedOccupancy,
      });
    } else {
      return res.status(404).json({
        error:true,
        message: "no such occupancy exist",
      });
    }
  } catch (err) {
    next(err);
  }
};

const setStatusLiveOccupancy = async (req, res, next) => {
  const occupancyId = req.params.occupancyId;
  const LiveOccupancy = await occupancyModel.findOneAndUpdate(
    { _id: occupancyId },
    { status: "live" },
    { new: true }
  );
  if (LiveOccupancy) {
    return res.status(201).json({
      error: false,
      message: "occupancy status set live",
      data: LiveOccupancy,
    });
  } else {
    return res.status(404).json({
      error: true,
      message: "no such occupancy exist",
    });
  }
};


//-===========================MIN LENGTH STAY==================================


const createminimumLengthStay = async (req, res, next) => {
  try {
   
    const data = req.body; //give hotelId in body

    const minimumLengthStay = await minimumLengthStayModel.create(data);

    return res.status(201).json({
      error: false,
      message: "min length stay created",
      data: minimumLengthStay,
    });
  } catch (err) {
    next(err);
  }
};

const updateminimumLengthStay = async (req, res, next) => {
  try {
    const minLengthStayid = req.params.minLengthStayid;
    const data = req.body; //give hotelId in body

    const minimumLengthStay = await minimumLengthStayModel.findOneAndUpdate(
      { _id: minLengthStayid },
      data,
      { new: true }
    );

    return res.status(200).json({
      error: false,
      message: "min length stay updated",
      data: minimumLengthStay,
    });
  } catch (err) {
    next(err);
  }
};

const deleteminimumLengthStay = async (req, res, next) => {
  try {
    const minLengthStayid = req.params.minLengthStayid;
   

    const minimumLengthStay = await minimumLengthStayModel.deleteOne({
      _id: minLengthStayid,
    });

    return res.status(200).json({
      error: false,
      message: "min length stay deleted",
    
    });
  } catch (err) {
    next(err);
  }
};



const setStatusLiveOfLength = async (req, res, next) => {
  try {   
    const minLengthStayid = req.params.minLengthStayid;
    const minLengthStay = await occupancyModel.findOneAndUpdate(
      { _id: minLengthStayid },
      { status: "live" },
      { new: true }
    );
    if (MinLengthStay) {
      return res.status(201).json({
        error: false,
        message: " status set live",
        data: minLengthStay,
      });
    } else {
      return res.status(404).json({
        error:true,
        message: "no such occupancy exist",
      });
    }
  } catch (error) {
    next(error)
};
}
module.exports = {
  createOccupancy,
  deleteOccupancy,
  updateOccupancy,
  setStatusLiveOccupancy,
  createminimumLengthStay,
  updateminimumLengthStay,
  deleteminimumLengthStay,
  setStatusLiveOfLength
};
