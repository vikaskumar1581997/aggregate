const mongoose = require("mongoose");

const companyProfileSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  authorizedPerson: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  mainOffice: {
    type: String,
    required: true,
  },
  yearStandUp: {
    type: String,
    required: true,
  },
  labours: {
    type: String,
    required: true,
  },
  branches: {
    type: String,
    required: true,
  },
  PO: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  companyLogo: {
    data: Buffer,
    contentType: String,
  },
  emailId: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  telNumber: {
    type: String,
  },
  faxNumber: {
    type: String,
  },
  companyPolicy: {
    type: String,
  },
});

module.exports = mongoose.model("CompanyProfile", companyProfileSchema);
