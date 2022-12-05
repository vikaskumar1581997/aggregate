const Destination = require("../../../../model/admin/manageMaster/locationSettings/destinationModel");

//Create a Destination
const createNewDestination = async (req, res, next) => {
  try {
    const destination = req.body;

    const destinationData = await Destination.create(destination);

    if (destinationData) {
      res.status(201).json({
        error: false,
        message: "Destination created!",
        response: destinationData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Destination not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Destinations
const allDestination = async (req, res, next) => {
  try {
    const allDestination = await Destination.find();
    if (allDestination) {
      res.status(201).json({
        error: false,
        message: "All Destination fetched successfully!",
        response: allDestination,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Destination not found!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single Destination
const getSingleDestination = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleDestination = await Destination.findById(_id).exec();

    if (singleDestination) {
      res.status(201).json({
        error: false,
        message: "Single Destination Fetched!",
        response: singleDestination,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single Destination Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update a Destination
const updateDestination = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const destination = req.body;

    const updatedDestination = await Destination.findOneAndDelete(
      _id,
      destination,
      { new: true }
    );

    if (updatedDestination) {
      res.status(201).json({
        error: false,
        message: "Destination updated!",
        response: updateDestination,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Destination not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a destination
const deleteDestination = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const deleteDestination = await Destination.findByIdAndDelete(_id);
    if (deleteDestination) {
      res.status(201).json({
        error: false,
        message: "Destination deleted!",
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
  createNewDestination,
  allDestination,
  updateDestination,
  deleteDestination,
  getSingleDestination,
};
