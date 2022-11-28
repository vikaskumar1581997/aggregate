const AssignMenu = require("../../../../model/admin/manageMaster/basicSettings/assignMenuModel");

//Create New AssignMenu
const createNewAssignMenu = async (req, res, next) => {
  try {
    const assignMenu = req.body;

    const assignMenuData = await AssignMenu.create(assignMenu);

    if (assignMenuData) {
      res.status(201).json({
        error: false,
        message: "AssignMenu created successfully!",
        response: assignMenuData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "AssignMenu not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Assign Menu
const getAllAssignMenu = async (req, res, next) => {
  try {
    const allAssign = await AssignMenu.find().lean();
    if (allAssign) {
      res.status(201).json({
        error: false,
        message: "All AssignMenu fetched!",
        response: allAssign,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Not fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single Assign Menu
const getSingleAssignMenu = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleAssignMenu = await AssignMenu.findById(_id).exec();

    if (singleAssignMenu) {
      res.status(201).json({
        error: false,
        message: "Single AssignMenu Fetched!",
        response: singleAssignMenu,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single AssignMenu Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Update all Assign
const updateAllAssignMenu = async (req, res, next) => {
  try {
    const assignMenu = req.body;

    const { id } = req.params;

    const updatedAAM = await AssignMenu.findOneAndUpdate(
      { _id: id },
      assignMenu,
      { new: true }
    );

    if (updatedAAM) {
      res.status(201).json({
        error: false,
        message: "AAM updated!",
        response: updatedAAM,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "AAM not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete allAssign Menu

const deleteAllAssignMenu = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteAllAssignMenu = await AssignMenu.findByIdAndDelete(_id);
    if (deleteAllAssignMenu) {
      res.status(201).json({
        error: false,
        message: "Assign Deleted!",
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
  createNewAssignMenu,
  getAllAssignMenu,
  updateAllAssignMenu,
  deleteAllAssignMenu,
  getSingleAssignMenu,
};
