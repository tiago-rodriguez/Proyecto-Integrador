const express = require("express");
const router = express.Router();

const user = require("./users");
const properties = require("./properties");
const appointments = require("./appointments");

router.use("/users", user);
router.use("/properties", properties);
router.use("/appointments", appointments);

module.exports = router;
