const Country = require("../../../../model/admin/manageMaster/locationSettings/countryModel");

//Create a County
const createNewCountry = async (req, res, next) => {
  try {
    const { marketType, region, countryCode, countryName } = req.body;
    const countryData = await Country.create({
      marketType,
      region,
      countryCode,
      countryName,
    });
    if (countryData) {
      res.status(201).json({
        error: false,
        message: "Country created!",
        response: countryData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Country not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Country
const getAllCountry = async (req, res, next) => {
  try {
    const allCountry = await Country.find().lean();
    if (allCountry) {
      res.status(201).json({
        error: false,
        message: "All countrys fetched successfully!",
        response: allCountry,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Country not found!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single Country
const getSingleCountry = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleCountry = await Country.findById(_id).exec();

    if (singleCountry) {
      res.status(201).json({
        error: false,
        message: "Single Country Fetched!",
        response: singleCountry,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single Country Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Update a country
const updateCountry = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const { marketType, region, countryCode, countryName } = req.body;

    const finalCountry = await Country.findById(_id).exec();

    finalCountry.marketType = marketType;
    finalCountry.region = region;
    finalCountry.countryCode = countryCode;
    finalCountry.countryName = countryName;

    const updatedCountry = await finalCountry.save();

    if (updatedCountry) {
      res.status(201).json({
        error: false,
        message: "Country updated!",
        response: updateCountry,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Country not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a country
const deleteCountry = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteCountry = await Country.findByIdAndDelete(_id);
    if (deleteCountry) {
      res.status(201).json({
        error: false,
        message: "Country deleted!",
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
  createNewCountry,
  getAllCountry,
  updateCountry,
  deleteCountry,
  getSingleCountry,
};
