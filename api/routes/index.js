const express = require("express");
const router = express.Router();

const user = require("./users");
const properties = require("./properties");
const appointments = require("./appointments");
const favorites = require("./favorites");

router.use("/users", user);
router.use("/properties", properties);
router.use("/appointments", appointments);
router.use("/favorites", favorites);

module.exports = router;
