const occupancyModel = require("../../../../../model/admin/registration/hotel/hotelActions/occupancyModel");
const minimumLengthStayModel = require("../../../../../model/admin/registration/hotel/hotelActions/minimunLength");

const createOccupancy = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const occupancyCreated = await occupancyModel.create(data);

    return res.status(201).json({
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

    return res.status(201).json({
      message: "occupancy deleted",
    });
  } catch (err) {
    next(err);
  }
}
const updateOccupancy = async (req, res, next) => {
  try {
    const occupancyId = req.params.occupancyId;
    const data=req.body
    console.log(data)
    const updatedOccupancy = await occupancyModel.findOneAndUpdate(
      {_id: occupancyId},
      data,
      {new:true}
    );
    if (updatedOccupancy) {
      return res.status(201).json({
        message: "occupancy updated",
        data: updatedOccupancy,
      });
    } else {
      return res.status(404).json({
        message: "no such occupancy exist",
      });
    }
  } catch (err) {
    next(err);
  }
};

const setStatusLive=async(req,res,next)=>{
  const occupancyId = req.params.occupancyId;
  const LiveOccupancy = await occupancyModel.findOneAndUpdate(
    { _id: occupancyId },
    {status:"live"},
    { new: true }
  );
  if (LiveOccupancy) {
    return res.status(201).json({
      message: "occupancy status set live",
      data: LiveOccupancy,
    });
  } else {
    return res.status(404).json({
      message: "no such occupancy exist",
    });
  }
}

module.exports = {
  createOccupancy,
  deleteOccupancy,
  updateOccupancy,
  setStatusLive,
};

