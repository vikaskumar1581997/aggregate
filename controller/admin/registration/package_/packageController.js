const Package = require("../../../../model/admin/registration/package_/packageModel");

//Create a new package
const createNewPackage = async (req, res, next) => {
  try {
    const {
      packageName,
      packageCode,
      packageBasicRate,
      EMIDate,
      currency,
      packageType,
      packageCategory,
      overview,
      include,
      status,
      arrivedCountry,
      state,
      place,
      noOfNights,
      itineraryDetails: {
        day,
        places,
        headline,
        itineraryImage,
        overview_,
        dayActivity,
      },
      inclusion,
      exclusion,
      termsAndConditions,
      packageHighlights,
    } = req.body;

    const img = `${req.file.filename}`;
    const packageImage = img.toString("base64");

    const newPackage = await Package.create({
      packageName,
      packageCode,
      packageBasicRate,
      EMIDate,
      currency,
      packageType,
      packageCategory,
      overview,
      include,
      status,
      arrivedCountry,
      state,
      place,
      noOfNights,
      itineraryDetails: {
        day,
        places,
        headline,
        overview_,
        dayActivity,
      },
      inclusion,
      exclusion,
      termsAndConditions,
      packageHighlights,
      packageImage: new Buffer.from(packageImage, "base64"),
      itineraryImage: new Buffer.from(itineraryImage, "base64"),
    });

    if (newPackage) {
      res.status(201).json({
        error: false,
        message: "New Package created",
        response: newPackage,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "New Package not created",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//Get all packages
const getAllPackage = async (req, res, next) => {
  try {
    const allPackage = await Package.find().exec();

    if (allPackage) {
      res.status(201).json({
        error: false,
        message: "Package fetched",
        response: allPackage,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Package not fetched",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//Update a package
const updatePackage = async (req, res, next) => {
  try {
    const {
      _id,
      packageName,
      packageCode,
      packageBasicRate,
      EMIDate,
      currency,
      packageType,
      packageCategory,
      overview,
      include,
      status,
      arrivedCountry,
      state,
      place,
      noOfNights,
      itineraryDetails: { day, places, headline, overview_, dayActivity },
      inclusion,
      exclusion,
      termsAndConditions,
      packageHighlights,
    } = req.body;

    const img = `${req.file.filename}`;
    const packageImage = img.toString("base64");
    const newImage = new Buffer.from(packageImage, "base64");

    const imgOne = `${req.file.filename}`;
    const itineraryImage = imgOne.toString("base64");
    const newImageOne = new Buffer.from(itineraryImage, "base64");

    const finalPackage = await Package.findById(_id);

    finalPackage.packageName = packageName;
    finalPackage.packageCode = packageCode;
    finalPackage.packageBasicRate = packageBasicRate;
    finalPackage.EMIDate = EMIDate;
    finalPackage.currency = currency;
    finalPackage.packageType = packageType;
    finalPackage.packageCategory = packageCategory;
    finalPackage.overview = overview;
    finalPackage.packageImage = packageImage;
    finalPackage.include = include;
    finalPackage.status = status;
    finalPackage.arrivedCountry = arrivedCountry;
    finalPackage.state = state;
    finalPackage.place = place;
    finalPackage.noOfNights = noOfNights;
    finalPackage.day = day;
    finalPackage.places = places;
    finalPackage.headline = headline;
    finalPackage.overview_ = overview_;
    finalPackage.dayActivity = dayActivity;
    finalPackage.inclusion = inclusion;
    finalPackage.exclusion = exclusion;
    finalPackage.termsAndConditions = termsAndConditions;
    finalPackage.packageHighlights = packageHighlights;

    finalPackage.packageImage = newImage;
    finalPackage.itineraryImage = newImageOne;

    const updatedPackage = await finalPackage.save();

    if (updatedPackage) {
      res.status(201).json({
        error: false,
        message: " Package updated",
        response: updatedPackage,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Package not updated",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//Delete a package
const deletePackage = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const delPackage = await Package.findByIdAndDelete(_id);

    if (delPackage) {
      res.status(201).json({
        error: false,
        message: " Package deleted",
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Package not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = {
  createNewPackage,
  getAllPackage,
  updatePackage,
  deletePackage,
};
