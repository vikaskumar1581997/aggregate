const contractModel=require("../../../../../model/admin/registration/hotel/hotelActions/saveContractRate");

const createContract=async (req,res,next)=>{
    try {
        const data=req.body //contain hotelId also

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

        const savedContract = await contractModel.create(data)
         return res.status(201).json({
           error: false,
           message: "data saved successfully",
           data: savedContract,
         });

    } catch (error) {
        next(error)
    }
}



const updateContract = async (req, res, next) => {
  try {
    const data = req.body; //contain hotelId also
    const contractId = req.params.contractId;

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

    const savedContract = await contractModel.findOneAndUpdate(
        {_id:contractId},
        data,
        {new:true});
    return res.status(200).json({
      error: false,
      message: "data updated successfully",
      data: savedContract,
    });
  } catch (error) {
    next(error);
  }
};

const deleteContract=async(req,res,next)=>{
   const contractId = req.params.contractId;

   const deleteContract = await contractModel.deleteOne({ _id: contractId });
    return res.status(200).json({
      error: false,
      message: "data deleted successfully",
  
    });
}

const setStatusLiveContract = async (req, res, next) => {
  try {
   const contractId = req.params.contractId;
    const contractRate = await contractModel.findOneAndUpdate(
     { _id: contractId },
      { status: "live" },
      { new: true }
    );
    if (contractRate) {
      return res.status(201).json({
        error: false,
        message: " status set live",
        data: contractRate,
      });
    } else {
      return res.status(404).json({
        error: true,
        message: "no such contract exist",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createContract,
  updateContract,
  deleteContract,
  setStatusLiveContract,
};