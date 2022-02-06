const express = require("express");
const router = express.Router();

const dataApi = require("./data");

router.use("/data", dataApi);

module.exports = router;
