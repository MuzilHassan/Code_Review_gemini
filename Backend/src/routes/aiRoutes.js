const express = require("express");
const aiController = require("../controller/aiController");
const router = express.Router();

router.post("/", aiController.getReview);
module.exports = router;
