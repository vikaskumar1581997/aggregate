const ShikaraModel = require("../../../../model/admin/registration/shikara/shikaraModel");

//Create a new Shikara
const createNewShikara = async (req, res, next) => {
  try {
    const shikaraData = req.body;
    const shikaraCreate = await ShikaraModel.create(shikaraData);

    if (shikaraCreate) {
      res.status(201).json({
        error: false,
        message: "ShikaraModel Created!",
        response: shikaraCreate,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "ShikaraModel Not Created!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Get all Shikara
const getAllShikara = async (req, res, next) => {
  try {
    const allShikara = await ShikaraModel.find().exec();

    if (allShikara) {
      res.status(201).json({
        error: false,
        message: " Shikara fetched",
        response: allShikara,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Shikara not fetched",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Get a single Shikara
const getSingleShikara = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleShikara = await ShikaraModel.findById(_id).exec();

    if (singleShikara) {
      res.status(201).json({
        error: false,
        message: "Single Shikara Fetched!",
        response: singleShikara,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single Shikara Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Update a  Shikara
const updateShikara = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const shikaraData = req.body;
    const updatedShikara = await findOneAndUpdate(_id, shikaraData, {
      new: true,
    });

    if (updatedShikara) {
      res.status(201).json({
        error: false,
        message: "Shikara updated!",
        response: updatedShikara,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Shikara not updated!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Delete a new Shikara
const deleteShikara = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const delShikara = await ShikaraModel.findByIdAndDelete(_id);

    if (delShikara) {
      res.status(201).json({
        error: false,
        message: " Shikara deleted",
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Shikara not deleted",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewShikara,
  getAllShikara,
  getSingleShikara,
  updateShikara,
  deleteShikara,
};
