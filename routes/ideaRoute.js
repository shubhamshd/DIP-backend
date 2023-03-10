const express = require("express");
const { getAllIdea, createIdea } = require("../controllers/ideaController");
const { uploadToIpfs } = require("../helpers/ipfs");
const storeFiles = require("../helpers/web3Storage-test")


const router = express.Router();

//Dashboard
router.get("/getAllIdea", getAllIdea);
router.post("/createIdea",createIdea);

module.exports = router;