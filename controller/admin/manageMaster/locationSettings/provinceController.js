const Province = require("../../../../model/admin/manageMaster/locationSettings/provinceModel");

//Create a Province
const createNewProvince = async (req, res, next) => {
  try {
    const province = req.body;

    const provinceData = await Province.create(province);

    if (provinceData) {
      res.status(201).json({
        error: false,
        message: "Province created!",
        response: provinceData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Province not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Province
const getAllProvince = async (req, res, next) => {
  try {
    const allProvince = await Province.find().lean();
    if (allProvince) {
      res.status(201).json({
        error: false,
        message: "All Province fetched successfully!",
        response: allProvince,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Province not found!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single Province
const getSingleProvince = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleProvince = await Province.findById(_id).exec();

    if (singleProvince) {
      res.status(201).json({
        error: false,
        message: "Single Province Fetched!",
        response: singleProvince,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single Province Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Update a Province
const updateProvince = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const province = req.body;

    const updatedProvince = await Province.findOneAndUpdate(_id, province, {
      new: true,
    });

    if (updatedProvince) {
      res.status(201).json({
        error: false,
        message: "Province updated!",
        response: updateProvince,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Province not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a Provice
const deleteProvince = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const deleteProvince = await Province.findByIdAndDelete(_id);
    if (deleteProvince) {
      res.status(201).json({
        error: false,
        message: "Province deleted!",
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
  getAllProvince,
  createNewProvince,
  updateProvince,
  deleteProvince,
  getSingleProvince,
};
