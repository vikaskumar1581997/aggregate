const mongoose = require("mongoose");

const agentCategorySchema = mongoose.Schema(
  {
    agentCategory: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AgentCategory", agentCategorySchema);
