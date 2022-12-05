const mongoose = require("mongoose");

const creditLimitModel = mongoose.Schema(
  {
    agentId: {
      type: String,
      required: true,
    },
    creditLimits: {
      type: Number,
      required: true,
    },
    remarks: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AgentCreditLimit", creditLimitModel);
