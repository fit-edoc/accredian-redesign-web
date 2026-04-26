const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  name: String,
  workEmail: String,
  companySize: String  
}, { timestamps: true });

module.exports = mongoose.model("Lead", LeadSchema);