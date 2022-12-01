const mongoose = require("mongoose");

const empSchema = mongoose.Schema({
  employeeCode: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  profileImage: {
    data: Buffer,
    contentType: String,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  faxNumber: {
    type: String,
  },
  telNumber: {
    type: String,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("Employee", empSchema);
