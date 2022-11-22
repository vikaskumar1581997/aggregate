const mongoose = require("mongoose");

const agentSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  shortName: {
    type: String,
  },
  businessType: {
    type: String,
    required: true,
  },
  companyType: {
    type: String,
    required: true,
  },
  companyCode: {
    type: String,
    required: true,
  },
  agentUrl: {
    type: String,
  },
  companyLogo: {
    data: Buffer,
    contentType: String,
  },
  authorizedPerson_firstName: {
    type: String,
    required: true,
  },
  authorizedPerson_lastName: {
    type: String,
    required: true,
  },
  agentEmail: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  contactPerson: {
    type: String,
  },
  faxNumber: {
    type: Number,
  },
  telNumber: {
    type: Number,
  },
  country: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  markupType: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("AgentSchema", agentSchema);
