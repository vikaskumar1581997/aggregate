const Itineary = require("../../../../model/admin/manageMaster/packageSettings/itinearyModel");

//Create a new Itineary
const createNewItineary = async (req, res, next) => {
  try {
    const { heading, description } = req.body;
    const img = `${req.file.filename}`;
    const itinearyImage = img.toString("base64");

    const newItineary = await Itineary.create({
      heading,
      description,
      itinearyImage: new Buffer.from(itinearyImage, "base64"),
    });
    console.log(newItineary);
    if (newItineary) {
      res.status(201).json({
        error: false,
        message: "New Itineary created",
        response: newItineary,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "New Itineary not created",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Itineary
const getAllItineary = async (req, res, next) => {
  try {
    const allItineary = await Itineary.find().exec();
    if (allItineary) {
      res.status(201).json({
        error: false,
        message: " Itineary fetched",
        response: allItineary,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Itineary not fetched",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update an Itineary
const updateItineary = async (req, res, next) => {
  try {
    const { _id, heading, description } = req.body;
    const img = `${req.file.filename}`;
    const itinearyImage = img.toString("base64");
    const newImg = new Buffer.from(itinearyImage, "base64");

    const finalItineary = await Itineary.findById(_id);

    finalItineary.heading = heading;
    finalItineary.description = description;
    finalItineary.itinearyImage = newImg;

    const updatedItineary = await finalItineary.save();

    if (updatedItineary) {
      res.status(201).json({
        error: false,
        message: " Itineary updated",
        response: updatedItineary,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Itineary not updated",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete an Itineary
const deleteItineary = async (req, res, next) => {
  try {
    const { _id } = req.params;

    const delItineary = await Itineary.findByIdAndDelete(_id);

    if (delItineary) {
      res.status(201).json({
        error: false,
        message: " Itineary deleted",
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Itineary not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = {
  createNewItineary,
  getAllItineary,
  updateItineary,
  deleteItineary,
};
