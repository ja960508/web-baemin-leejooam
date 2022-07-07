const express = require("express");
const auth = require("./auth");
const router = express.Router();

router.use("/users", auth);

module.exports = router;
