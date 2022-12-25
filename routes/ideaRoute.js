const express = require("express");
const { getAllIdea } = require("../controllers/ideaController");

const router = express.Router();

//Dashboard
router.get("/dashboard", getAllIdea);

module.exports = router;