const Employee = require("../../../../model/admin/registration/employee/employeeModel");

//Create a new Employee
const createNewEmployee = async (req, res, next) => {
  try {
    const {
      employeeCode,
      firstName,
      lastName,  
      designation,
      dateOfBirth,
      email,
      mobileNumber,
      zipCode,
      faxNumber,
      telNumber,
      address,
    } = req.body;

    const img = `${req.file.filename}`;
    const profileImage = img.toString("base64");

    const newEmployee = await Employee.create({
      employeeCode,
      firstName,
      lastName,
      designation,
      dateOfBirth,
      email,
      mobileNumber,
      zipCode,
      faxNumber,
      telNumber,
      address,
      profileImage: new Buffer.from(profileImage, "base64"),
    });

    if (newEmployee) {
      res.status(201).json({
        error: false,
        message: "New Employee created",
        response: newEmployee,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "New Employee not created",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Employee
const getAllEmployee = async (req, res, next) => {
  try {
    const allEmployee = await Employee.find().exec();

    if (allEmployee) {
      res.status(201).json({
        error: false,
        message: " Employee fetched",
        response: allEmployee,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Employee not fetched",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single Employee
const getSingleEmployee = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleEmployee = await Employee.findById(_id).exec();

    if (singleEmployee) {
      res.status(201).json({
        error: false,
        message: "Single Employee Fetched!",
        response: singleEmployee,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single Employee Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Update an Employee
const updateEmployee = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const {
      employeeCode,
      firstName,
      lastName,
      designation,
      dateOfBirth,
      email,
      mobileNumber,
      zipCode,
      faxNumber,
      telNumber,
      address,
    } = req.body;

    const img = `${req.file.filename}`;
    const profileImage = img.toString("base64");
    const newImg = new Buffer.from(profileImage, "base64");

    const finalEmployee = await Employee.findById(_id);

    finalEmployee.employeeCode = employeeCode;
    finalEmployee.firstName = firstName;
    finalEmployee.lastName = lastName;
    finalEmployee.designation = designation;
    finalEmployee.dateOfBirth = dateOfBirth;
    finalEmployee.email = email;
    finalEmployee.mobileNumber = mobileNumber;
    finalEmployee.zipCode = zipCode;
    finalEmployee.faxNumber = faxNumber;
    finalEmployee.telNumber = telNumber;
    finalEmployee.address = address;
    finalEmployee.profileImage = newImg;

    const updatedEmployee = await finalEmployee.save();

    if (updatedEmployee) {
      res.status(201).json({
        error: false,
        message: " Employee updated",
        response: updatedEmployee,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Employee not updated",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};
//Delete an Employee
const deleteEmployee = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteEmp = await Employee.findByIdAndDelete(_id);

    if (deleteEmp) {
      res.status(201).json({
        error: false,
        message: " Employee deleted",
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Employee not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = {
  createNewEmployee,
  getAllEmployee,
  getSingleEmployee,
  updateEmployee,
  deleteEmployee,
};
