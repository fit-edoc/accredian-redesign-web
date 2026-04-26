const Lead = require("../model/Lead");
const axios = require("axios");

exports.createLead = async (req, res) => {
  try {
    const { name, workEmail, companySize } = req.body;

    const lead = await Lead.create({ name, workEmail, companySize });

    await axios.post(process.env.SHEET_URL, {
      name,
      workEmail,
      companySize
    });

 

    res.status(201).json({ success: true,lead });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};