const express = require("express");
const { loginUser, registerUser } = require("../controllers/userController");


const router = express.Router();

//Dashboard
router.post("/loginUser", loginUser);
router.post("/registerUser",registerUser);

module.exports = router;