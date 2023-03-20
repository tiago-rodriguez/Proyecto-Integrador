const express = require("express");
const router = express.Router();

const user = require("./users");
const properties = require("./properties");

router.use("/users", user);
router.use("/properties", properties);

module.exports = router;
