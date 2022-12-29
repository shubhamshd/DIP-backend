const express = require("express");
const { getAllIdea, createIdea } = require("../controllers/ideaController");
const { uploadToIpfs } = require("../helpers/ipfs");


const router = express.Router();

//Dashboard
router.get("/getAllIdea", getAllIdea);
router.post("/createIdea",createIdea);
router.post("/uploadToIpfs", uploadToIpfs)

module.exports = router;