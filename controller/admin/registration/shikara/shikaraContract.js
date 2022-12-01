const ShikaraContract = require("../../../../model/admin/registration/shikara/shikaraActions/shikaraContractModel");

//Create
const createNewContract = async (req, res, next) => {
  try {
    const contractData = req.body;
    const createContract = await ShikaraContract.create(contractData);

    if (createContract) {
      res.status(201).json({
        error: false,
        message: "Shikara Contract Created!",
        response: createContract,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Shikara Contract Not Created!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//Get by ID
const getSingleContract = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleContract = await ShikaraContract.findById(_id).exec();

    if (singleContract) {
      res.status(201).json({
        error: false,
        message: "Shikara Contract Fetched!",
        response: singleContract,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Shikara Contract Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//Update
const updateContract = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const contractData = req.body;

    const updatedContract = await ShikaraContract.findOneAndUpdate(
      _id,
      contractData,
      { new: true }
    );

    if (updatedContract) {
      res.status(201).json({
        error: false,
        message: "Shikara Contract updated!",
        response: updatedContract,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Shikara Contract not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//Delete
const deleteContract = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const delContract = await ShikaraContract.findByIdAndDelete(_id);

    if (delContract) {
      res.status(201).json({
        error: false,
        message: " Shikara Contract deleted",
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Shikara Contract not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = {
  createNewContract,
  getSingleContract,
  updateContract,
  deleteContract,
};
