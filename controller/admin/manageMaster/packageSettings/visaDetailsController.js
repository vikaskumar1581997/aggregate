const VisaDetails = require("../../../../model/admin/manageMaster/packageSettings/visaDetailsModel");

//Create a new Visa Model
const createNewVisaModel = async (req, res, next) => {
  try {
    const { passportCountry, country, passportCode, description } = req.body;

    const visaModelData = await VisaDetails.create({
      passportCountry,
      country,
      passportCode,
      description,
    });

    if (visaModelData) {
      res.status(201).json({
        error: false,
        message: "Visa Model created!",
        response: visaModelData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Visa Model not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Visa Models
const getAllVisaModel = async (req, res, next) => {
  try {
    const allVisaModel = await VisaDetails.find().exec();

    if (allVisaModel) {
      res.status(201).json({
        error: false,
        message: "Visa Model fetched!",
        response: allVisaModel,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Visa Model not fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update Visa Model
const updateVisaModel = async (req, res, next) => {
  try {
    const { _id, passportCountry, country, passportCode, description } =
      req.body;
    const finalVisaModel = await VisaDetails.findById(_id);

    finalVisaModel.passportCountry = passportCountry;
    finalVisaModel.country = country;
    finalVisaModel.passportCode = passportCode;
    finalVisaModel.description = description;

    const updatedVisaModel = await finalVisaModel.save();

    if (updatedVisaModel) {
      res.status(201).json({
        error: false,
        message: "Visa Model updated!",
        response: updatedVisaModel,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Visa Model not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete Visa Model
const deleteVisaModel = async (req, res, next) => {
  try {
    const { _id } = req.params;

    const deleteModel = await VisaDetails.findByIdAndDelete(_id);

    if (deleteModel) {
      res.status(201).json({
        error: false,
        message: "Visa Model deleted!",
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Visa Model not deleted!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = {
  createNewVisaModel,
  getAllVisaModel,
  updateVisaModel,
  deleteVisaModel,
};
