const express = require("express");
const {getCommentController, postCommentController} = require("../controllers/commentController");

const router = express.Router();

//comment
router.get("/getcomment", getCommentController);
router.post("/postComment",postCommentController)

module.exports = router;