const Region = require("../../../../model/admin/manageMaster/locationSettings/regionModel");

//Create a new Region
const createNewRegion = async (req, res, next) => {
  try {
    const { region } = req.body;
    const regionData = await Region.create({ region });
    if (regionData) {
      res.status(201).json({
        error: false,
        message: "Region created!",
        response: regionData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Region not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Region
const getAllRegion = async (req, res, next) => {
  try {
    const allRegion = await Region.find().lean();
    // res.json(allRegion);
    if (allRegion) {
      res.status(201).json({
        error: false,
        message: "All regions fetched successfully!",
        response: allRegion,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Region not found!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update a Region
const updateRegion = async (req, res, next) => {
  try {
    const { _id, region } = req.body;

    const finalRegion = await Region.findById(_id).exec();
    finalRegion.region = region;

    const updatedRegion = await finalRegion.save();

    if (updatedRegion) {
      res.status(201).json({
        error: false,
        message: "Region updated!",
        response: updatedRegion,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Region not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a Region
const deleteRegion = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const deleteRegion = await Region.findByIdAndDelete(_id);
    if (deleteRegion) {
      res.status(201).json({
        error: false,
        message: "Region deleted!",
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
  createNewRegion,
  getAllRegion,
  updateRegion,
  deleteRegion,
};
