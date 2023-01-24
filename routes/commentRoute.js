const express = require("express");
const {getAllCommentController,getCommentOnIdeaController, postCommentController} = require("../controllers/commentController")

const router = express.Router();

//comment
router.get("/getcomment", getAllCommentController);
router.post("/getcommentOnIdea", getCommentOnIdeaController);
router.post("/postComment",postCommentController);

module.exports = router;