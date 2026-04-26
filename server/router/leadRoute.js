const express = require("express");
const router = express.Router();
const { createLead } = require("../controller/leadController");

router.post("/lead", createLead);

module.exports = router;